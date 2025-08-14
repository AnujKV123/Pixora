import PrismJs from "prismjs"
import { useEffect } from "react"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-typescript"
import "./code-theme.css"


type CodeViewProps = {
  code: string
  lang: string
}

export const CodeView = ({ code, lang }: CodeViewProps) => {
  useEffect(() => {
    PrismJs.highlightAll()
  }, [code])

  return (
    <pre className="p-2 bg-transparent border-none rounded-none m-0 text-xs">
      <code className={`language-${lang.slice(1)}`}>{code}</code>
    </pre>
  )
}
