import { Bot, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { SIAKADU_DEMO_MESSAGES } from '../data/opensource'
import { TelegramIcon } from './BrandIcons'

interface SiakaduPreviewProps {
  compact?: boolean
}

export function SiakaduPreview({ compact = false }: SiakaduPreviewProps) {
  const { t } = useLanguage()
  const messages = compact ? SIAKADU_DEMO_MESSAGES.slice(0, 1) : SIAKADU_DEMO_MESSAGES

  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#0f1c2e] text-[#eef3fb]">
      {/* Telegram Bot Bar */}
      <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-[#15253d] px-3.5 py-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#39bfa7]/20 text-[#39bfa7]">
            <Bot className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold leading-tight text-white">@siakadu_bot</p>
            <p className="truncate font-mono text-[10px] text-[#9eb4d4]">
              BGE-M3 Embeddings · FAISS
            </p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#39bfa7]/40 bg-[#39bfa7]/15 px-2 py-0.5 font-mono text-[10px] text-[#39bfa7]">
          <TelegramIcon className="h-3 w-3" aria-hidden="true" />
          <span>FAQ AI</span>
        </span>
      </div>

      {/* Chat Stream */}
      <div className={`flex flex-1 flex-col justify-center gap-2.5 ${compact ? 'p-3' : 'p-4 sm:p-5'}`}>
        {messages.map((msg) => (
          <div key={msg.id} className="space-y-2">
            {/* Student message */}
            <div className="ml-auto max-w-[86%] rounded-2xl rounded-br-sm bg-[#244775] px-3 py-2 text-[11px] leading-snug text-white shadow-xs sm:text-xs">
              {t(msg.question)}
            </div>
            {/* Semantic Bot Reply */}
            <div className="mr-auto max-w-[92%] rounded-2xl rounded-bl-sm border border-white/10 bg-[#182944] px-3 py-2 text-[11px] leading-snug text-[#e2eaf6] sm:text-xs">
              <p className={compact ? 'line-clamp-3' : ''}>{t(msg.answer)}</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-2 font-mono text-[10px] text-[#e0b660]">
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
                  cos={msg.similarityScore}
                </span>
                <span className="text-[#7ba4db]">{msg.sourceTag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
