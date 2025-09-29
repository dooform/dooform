"use client"

import React, { useState, useEffect } from 'react'
import DynamicForm from './DynamicForm'
import HtmlPreview from './HtmlPreview'
import { extractPlaceholders, replacePlaceholders, PlaceholderField } from './utils/placeholderParser'

const FormFillPage = () => {
  const [htmlFile, setHtmlFile] = useState('/example_copy.html')
  const [availableFiles, setAvailableFiles] = useState<string[]>([])
  const [htmlContent, setHtmlContent] = useState('')
  const [placeholders, setPlaceholders] = useState<PlaceholderField[]>([])
  const [formValues, setFormValues] = useState<Record<string, string>>({})
  const [previewHtml, setPreviewHtml] = useState('')

  // Fetch available HTML files
  useEffect(() => {
    const fetchAvailableFiles = async () => {
      try {
        // Try to fetch some common HTML files to see which ones exist
        const possibleFiles = ['/example_copy.html', '/example__copy.html', '/ec_1.html']
        const existingFiles: string[] = []

        for (const file of possibleFiles) {
          try {
            const response = await fetch(file, { method: 'HEAD' })
            if (response.ok) {
              existingFiles.push(file)
            }
          } catch (error) {
            // File doesn't exist, skip it
          }
        }

        setAvailableFiles(existingFiles)

        // Set the first available file as default
        if (existingFiles.length > 0 && !existingFiles.includes(htmlFile)) {
          setHtmlFile(existingFiles[0])
        }
      } catch (error) {
        console.error('Error checking available files:', error)
        setAvailableFiles(['/example_copy.html']) // fallback
      }
    }

    fetchAvailableFiles()
  }, [])

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(htmlFile)
        const content = await response.text()
        setHtmlContent(content)

        // Extract placeholders from HTML
        const extractedPlaceholders = extractPlaceholders(content)
        setPlaceholders(extractedPlaceholders)

        // Initialize form values
        const initialValues: Record<string, string> = {}
        extractedPlaceholders.forEach(placeholder => {
          initialValues[placeholder.key] = ''
        })
        setFormValues(initialValues)

        // Set initial preview
        setPreviewHtml(content)
      } catch (error) {
        console.error('Error fetching HTML content:', error)
        setHtmlContent('<p>Error loading HTML content</p>')
        setPreviewHtml('<p>Error loading HTML content</p>')
      }
    }

    if (htmlFile) {
      fetchHtmlContent()
    }
  }, [htmlFile])

  // Update preview when form values change
  useEffect(() => {
    if (htmlContent) {
      const updatedHtml = replacePlaceholders(htmlContent, formValues)
      setPreviewHtml(updatedHtml)
    }
  }, [htmlContent, formValues])

  const handleFormChange = (key: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <div className='flex gap-8 text-ms-800 min-h-screen p-6'>
      <div className='flex-1 pr-4 font-sans'>
        <h1 className='text-4xl font-semibold py-2 mb-6'>Dynamic Form Filler</h1>

        <div className="mb-6">
          <label htmlFor="htmlFile" className="block text-sm font-medium text-gray-700 mb-2">
            Select HTML File:
          </label>
          <select
            id="htmlFile"
            value={htmlFile}
            onChange={(e) => setHtmlFile(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-on-500 focus:border-on-500"
          >
            {availableFiles.length > 0 ? (
              availableFiles.map((file) => (
                <option key={file} value={file}>
                  {file.replace('/', '')}
                </option>
              ))
            ) : (
              <option value="">No HTML files found</option>
            )}
          </select>
        </div>

        <DynamicForm
          fields={placeholders}
          values={formValues}
          onChange={handleFormChange}
        />
      </div>

      <div className='flex-2 pl-4 border-l border-gray-300 sticky top-0 h-screen overflow-hidden'>
        <HtmlPreview htmlContent={previewHtml} title="Live Preview" />
      </div>
    </div>
  )
}

export default FormFillPage