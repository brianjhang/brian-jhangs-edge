import { o as createVNode, F as Fragment, ax as __astro_tag_component__ } from './astro/server_U-kaEscN.mjs';
import 'clsx';

const frontmatter = {
  "title": "RAG 完全解析：檢索增強生成讓 AI 擁有專屬知識庫｜Brian's AI 小百科",
  "description": "深入解析 RAG (檢索增強生成) 的核心原理與實作架構，了解如何讓 AI 存取專屬知識並生成準確答案。",
  "date": "2025-08-28",
  "series": "ai",
  "lang": "zh-TW",
  "type": "education",
  "technology": "RAG",
  "tags": ["RAG", "檢索增強生成", "向量資料庫", "知識庫", "AI應用"],
  "summary": "RAG 讓 AI 突破訓練資料限制，即時存取專屬知識庫，生成更準確且具時效性的回答。",
  "keywords": ["RAG是什麼", "檢索增強生成", "向量資料庫", "AI知識庫", "RAG開發"],
  "canonicalUrl": "https://brianjhang.com/ai/concepts/rag-complete-guide",
  "author": "Brian Jhang",
  "publishedDate": "2025-08-28T09:00:00+08:00",
  "modifiedDate": "2025-08-28T09:00:00+08:00",
  "category": "AI 技術教育",
  "subcategory": "核心技術",
  "featured": true,
  "links": [{
    "title": "LangChain RAG 教學",
    "url": "https://python.langchain.com/docs/use_cases/question_answering/"
  }, {
    "title": "OpenAI Embeddings API",
    "url": "https://platform.openai.com/docs/guides/embeddings"
  }, {
    "title": "Pinecone 向量資料庫",
    "url": "https://www.pinecone.io/"
  }, {
    "title": "Chroma 開源方案",
    "url": "https://www.trychroma.com/"
  }],
  "readingTime": 15,
  "wordCount": 2800,
  "difficulty": "intermediate",
  "social": {
    "thread": true,
    "ig": true,
    "x": true,
    "fb": true
  },
  "entities": ["RAG", "檢索增強生成", "向量資料庫", "嵌入向量", "語義搜尋"],
  "related_topics": ["向量資料庫", "語義搜尋", "知識圖譜", "微調技術", "提示工程"],
  "content_type": "technical_guide",
  "expertise_level": "intermediate",
  "last_fact_check": "2025-08-28",
  "primary_sources": ["學術論文", "OpenAI文檔", "LangChain文檔", "業界實踐"],
  "seo": {
    "metaTitle": "RAG 完全解析 2025：檢索增強生成深度指南｜讓AI擁有專屬知識",
    "metaDescription": "全面了解 RAG：核心架構、向量資料庫選擇與實戰開發。從理論基礎到生產部署的完整指南。",
    "ogImage": "/images/og/ai/concepts/rag-complete-guide.png",
    "twitterCard": "summary_large_image"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "快速回答rag-是什麼",
    "text": "快速回答：RAG 是什麼？"
  }, {
    "depth": 2,
    "slug": "發展背景為什麼需要-rag",
    "text": "發展背景：為什麼需要 RAG？"
  }, {
    "depth": 3,
    "slug": "llm-的根本限制",
    "text": "LLM 的根本限制"
  }, {
    "depth": 3,
    "slug": "rag-的解決方案",
    "text": "RAG 的解決方案"
  }, {
    "depth": 2,
    "slug": "核心架構rag-如何運作",
    "text": "核心架構：RAG 如何運作？"
  }, {
    "depth": 3,
    "slug": "rag-系統架構圖",
    "text": "RAG 系統架構圖"
  }, {
    "depth": 3,
    "slug": "核心元件詳解",
    "text": "核心元件詳解"
  }, {
    "depth": 4,
    "slug": "1-嵌入模型-embedding-model",
    "text": "1. 嵌入模型 (Embedding Model)"
  }, {
    "depth": 4,
    "slug": "2-向量資料庫-vector-database",
    "text": "2. 向量資料庫 (Vector Database)"
  }, {
    "depth": 4,
    "slug": "3-檢索策略",
    "text": "3. 檢索策略"
  }, {
    "depth": 2,
    "slug": "核心能力rag-的技術優勢",
    "text": "核心能力：RAG 的技術優勢"
  }, {
    "depth": 3,
    "slug": "1-知識即時更新",
    "text": "1. 知識即時更新"
  }, {
    "depth": 3,
    "slug": "2-答案可追溯性",
    "text": "2. 答案可追溯性"
  }, {
    "depth": 3,
    "slug": "3-多模態支援",
    "text": "3. 多模態支援"
  }, {
    "depth": 3,
    "slug": "實際案例企業知識問答系統",
    "text": "實際案例：企業知識問答系統"
  }, {
    "depth": 2,
    "slug": "主流工具與框架對比",
    "text": "主流工具與框架對比"
  }, {
    "depth": 3,
    "slug": "1-langchain---最成熟的-rag-框架",
    "text": "1. LangChain - 最成熟的 RAG 框架"
  }, {
    "depth": 3,
    "slug": "2-llamaindex---專注數據連接",
    "text": "2. LlamaIndex - 專注數據連接"
  }, {
    "depth": 3,
    "slug": "3-haystack---企業級解決方案",
    "text": "3. Haystack - 企業級解決方案"
  }, {
    "depth": 2,
    "slug": "實戰應用場景",
    "text": "實戰應用場景"
  }, {
    "depth": 3,
    "slug": "1-企業內部知識庫",
    "text": "1. 企業內部知識庫"
  }, {
    "depth": 3,
    "slug": "2-客戶服務系統",
    "text": "2. 客戶服務系統"
  }, {
    "depth": 3,
    "slug": "3-研究分析助手",
    "text": "3. 研究分析助手"
  }, {
    "depth": 3,
    "slug": "4-教育培訓平台",
    "text": "4. 教育培訓平台"
  }, {
    "depth": 2,
    "slug": "技術挑戰與解決方案",
    "text": "技術挑戰與解決方案"
  }, {
    "depth": 3,
    "slug": "1-文件分塊策略",
    "text": "1. 文件分塊策略"
  }, {
    "depth": 3,
    "slug": "2-檢索品質優化",
    "text": "2. 檢索品質優化"
  }, {
    "depth": 3,
    "slug": "3-答案品質控制",
    "text": "3. 答案品質控制"
  }, {
    "depth": 2,
    "slug": "開發建議與最佳實踐",
    "text": "開發建議與最佳實踐"
  }, {
    "depth": 3,
    "slug": "1-數據準備策略",
    "text": "1. 數據準備策略"
  }, {
    "depth": 3,
    "slug": "2-檢索優化",
    "text": "2. 檢索優化"
  }, {
    "depth": 3,
    "slug": "3-生產部署",
    "text": "3. 生產部署"
  }, {
    "depth": 2,
    "slug": "未來發展趨勢",
    "text": "未來發展趨勢"
  }, {
    "depth": 3,
    "slug": "短期發展-6-12-個月",
    "text": "短期發展 (6-12 個月)"
  }, {
    "depth": 3,
    "slug": "中期展望-1-2-年",
    "text": "中期展望 (1-2 年)"
  }, {
    "depth": 3,
    "slug": "長期願景-2-5-年",
    "text": "長期願景 (2-5 年)"
  }, {
    "depth": 2,
    "slug": "常見問題-faq",
    "text": "常見問題 FAQ"
  }, {
    "depth": 2,
    "slug": "學習資源推薦",
    "text": "學習資源推薦"
  }, {
    "depth": 3,
    "slug": "入門資源",
    "text": "入門資源"
  }, {
    "depth": 3,
    "slug": "進階學習",
    "text": "進階學習"
  }, {
    "depth": 3,
    "slug": "實戰工具",
    "text": "實戰工具"
  }, {
    "depth": 2,
    "slug": "結語rag-讓-ai-擁有專屬記憶",
    "text": "結語：RAG 讓 AI 擁有專屬記憶"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "快速回答rag-是什麼",
      children: "快速回答：RAG 是什麼？"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "一句話回答"
      }), "：RAG (檢索增強生成 Retrieval-Augmented Generation) 是讓 AI 能夠即時存取外部知識庫、結合檢索到的相關資訊來生成更準確答案的技術架構。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "核心突破"
      }), "："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["🚀 ", createVNode(_components.strong, {
          children: "突破訓練限制"
        }), "：不需重新訓練就能獲得最新知識"]
      }), "\n", createVNode(_components.li, {
        children: ["🎯 ", createVNode(_components.strong, {
          children: "專屬知識存取"
        }), "：讓 AI 了解你的公司文件、產品資料"]
      }), "\n", createVNode(_components.li, {
        children: ["⚡ ", createVNode(_components.strong, {
          children: "即時資訊整合"
        }), "：結合即時數據生成準確回答"]
      }), "\n", createVNode(_components.li, {
        children: ["💰 ", createVNode(_components.strong, {
          children: "成本效益"
        }), "：比微調更省成本，比提示工程更穩定"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "實際表現"
      }), "：企業 AI 客服準確率從 60% 提升到 90%，研發團隊文件查詢效率提升 5 倍。"]
    }), "\n", createVNode(_components.h2, {
      id: "發展背景為什麼需要-rag",
      children: "發展背景：為什麼需要 RAG？"
    }), "\n", createVNode(_components.h3, {
      id: "llm-的根本限制",
      children: "LLM 的根本限制"
    }), "\n", createVNode(_components.p, {
      children: "大語言模型雖然強大，但面臨三個核心問題："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "知識截止點"
        }), "：只知道訓練時的資料，無法獲得最新資訊"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "幻覺問題"
        }), "：缺乏準確資料時會編造看似合理的答案"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "專屬知識缺失"
        }), "：不了解企業內部文件、產品規格等"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "rag-的解決方案",
      children: "RAG 的解決方案"
    }), "\n", createVNode(_components.p, {
      children: "RAG 在 2020 年由 Facebook AI Research 提出，核心理念是："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "傳統 LLM：輸入 → 生成"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "RAG 架構：輸入 → 檢索相關資料 → 結合資料生成"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "關鍵時機"
      }), "：隨著向量資料庫技術成熟和嵌入模型效能提升，RAG 已成為企業 AI 應用的標準架構。"]
    }), "\n", createVNode(_components.h2, {
      id: "核心架構rag-如何運作",
      children: "核心架構：RAG 如何運作？"
    }), "\n", createVNode(_components.h3, {
      id: "rag-系統架構圖",
      children: "RAG 系統架構圖"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "📚 RAG 核心架構流程"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── 📄 文件預處理"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── 文本分割 (Chunking)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── 向量化 (Embeddings)  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── 索引建立 (Indexing)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── 🔍 檢索階段"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── 查詢向量化"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── 相似度計算"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── 相關文件召回"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── 🤖 生成階段"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── 上下文組合"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── 提示模板"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    └── 答案生成"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "核心元件詳解",
      children: "核心元件詳解"
    }), "\n", createVNode(_components.h4, {
      id: "1-嵌入模型-embedding-model",
      children: "1. 嵌入模型 (Embedding Model)"
    }), "\n", createVNode(_components.p, {
      children: "將文字轉換為高維向量，捕捉語義資訊："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " openai "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " OpenAI"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "client "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " OpenAI()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " get_embedding"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(text):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"\"\"將文字轉換為向量表示\"\"\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    response "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " client.embeddings.create("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "        model"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"text-embedding-3-large\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "        input"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "text,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "        encoding_format"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"float\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response.data["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "].embedding"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 範例使用"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "doc_embedding "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " get_embedding("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"RAG 是檢索增強生成技術\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "query_embedding "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " get_embedding("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"什麼是 RAG？\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "2-向量資料庫-vector-database",
      children: "2. 向量資料庫 (Vector Database)"
    }), "\n", createVNode(_components.p, {
      children: "儲存和搜尋文件向量："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chromadb"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 初始化 Chroma 資料庫"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "client "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chromadb.Client()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "collection "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " client.create_collection("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"documents\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 新增文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "collection.add("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    documents"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"RAG 結合檢索與生成\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"向量資料庫儲存語義資訊\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    metadatas"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[{"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"source\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"doc1\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}, {"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"source\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"doc2\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    ids"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"1\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"2\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 語義搜尋"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "results "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " collection.query("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    query_texts"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"什麼是RAG技術？\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    n_results"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "3-檢索策略",
      children: "3. 檢索策略"
    }), "\n", createVNode(_components.p, {
      children: "實現高效準確的相關文件檢索："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " hybrid_search"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(query, collection, alpha"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.7"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"\"\"混合檢索：結合語義搜尋和關鍵字搜尋\"\"\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # 語義搜尋"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    semantic_results "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " collection.query("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "        query_texts"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[query],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "        n_results"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # 關鍵字搜尋（使用 BM25）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    keyword_results "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " bm25_search(query, documents)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # 結果融合"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    final_results "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " combine_results("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        semantic_results, "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        keyword_results, "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        alpha"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " final_results"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "核心能力rag-的技術優勢",
      children: "核心能力：RAG 的技術優勢"
    }), "\n", createVNode(_components.h3, {
      id: "1-知識即時更新",
      children: "1. 知識即時更新"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "無需重訓練"
        }), "：新增文件即時可用"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "成本控制"
        }), "：避免昂貴的模型微調"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "靈活性"
        }), "：支援多種文件格式和資料來源"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-答案可追溯性",
      children: "2. 答案可追溯性"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "來源引用"
        }), "：每個答案都能追溯到具體文件"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "可信度評估"
        }), "：基於檢索分數評估答案可信度"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "透明度"
        }), "：用戶可以查看參考資料"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-多模態支援",
      children: "3. 多模態支援"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "文字文件"
        }), "：PDF、Word、網頁內容"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "結構化資料"
        }), "：表格、資料庫記錄"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "多媒體內容"
        }), "：圖片描述、影片字幕"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "實際案例企業知識問答系統",
      children: "實際案例：企業知識問答系統"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EnterpriseRAG"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " __init__"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, documents_path):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".collection "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".build_knowledge_base(documents_path)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".llm "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " OpenAI()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " answer_question"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, question):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # 檢索相關文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        relevant_docs "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".collection.query("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            query_texts"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[question],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            n_results"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # 構建上下文"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        context "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".join(["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            f"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"文件 "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1}"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "doc"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i, doc "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " enumerate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(relevant_docs["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'documents'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "])"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        ])"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # 生成答案"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        prompt "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " f"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"\"\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        基於以下企業文件資訊回答問題："
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        {"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "context"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        問題："
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "question"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        請基於提供的文件內容準確回答，如果資訊不足請說明。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        \"\"\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".llm.completions.create("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            model"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"gpt-4o\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            messages"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[{"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"role\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"user\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"content\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": prompt}],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            max_tokens"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "500"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "            \"answer\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": response.choices["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "].message.content,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "            \"sources\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": relevant_docs["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'metadatas'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        }"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "主流工具與框架對比",
      children: "主流工具與框架對比"
    }), "\n", createVNode(_components.h3, {
      id: "1-langchain---最成熟的-rag-框架",
      children: "1. LangChain - 最成熟的 RAG 框架"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "優勢"
      }), "："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "豐富的生態系統和整合"
      }), "\n", createVNode(_components.li, {
        children: "支援多種向量資料庫"
      }), "\n", createVNode(_components.li, {
        children: "活躍的社群支援"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " langchain.document_loaders "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " PyPDFLoader"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " langchain.text_splitter "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " RecursiveCharacterTextSplitter"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " langchain.vectorstores "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Chroma"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " langchain.embeddings "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " OpenAIEmbeddings"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " langchain.chains "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " RetrievalQA"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# LangChain RAG 實作"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "loader "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " PyPDFLoader("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"company_docs.pdf\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "documents "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " loader.load()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "text_splitter "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " RecursiveCharacterTextSplitter("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    chunk_size"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    chunk_overlap"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "texts "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " text_splitter.split_documents(documents)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "vectorstore "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Chroma.from_documents("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    documents"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "texts,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    embedding"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "OpenAIEmbeddings()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "qa_chain "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " RetrievalQA.from_chain_type("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    llm"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "OpenAI(),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    retriever"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "vectorstore.as_retriever()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-llamaindex---專注數據連接",
      children: "2. LlamaIndex - 專注數據連接"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "優勢"
      }), "："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "優秀的數據接收器和轉換器"
      }), "\n", createVNode(_components.li, {
        children: "進階的索引策略"
      }), "\n", createVNode(_components.li, {
        children: "適合複雜的企業數據整合"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " llama_index "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " VectorStoreIndex, SimpleDirectoryReader"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# LlamaIndex 快速上手"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "documents "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " SimpleDirectoryReader("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'data'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").load_data()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "index "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " VectorStoreIndex.from_documents(documents)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "query_engine "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " index.as_query_engine()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "response "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " query_engine.query("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"什麼是公司的核心價值？\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-haystack---企業級解決方案",
      children: "3. Haystack - 企業級解決方案"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "優勢"
      }), "："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "強大的管道架構"
      }), "\n", createVNode(_components.li, {
        children: "支援大規模部署"
      }), "\n", createVNode(_components.li, {
        children: "豐富的評估工具"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "實戰應用場景",
      children: "實戰應用場景"
    }), "\n", createVNode(_components.h3, {
      id: "1-企業內部知識庫",
      children: "1. 企業內部知識庫"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "HR 政策問答"
        }), "：員工手冊、福利制度查詢"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "技術文件搜尋"
        }), "：API 文件、架構說明"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "合規資訊查詢"
        }), "：法規條文、內控制度"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-客戶服務系統",
      children: "2. 客戶服務系統"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "產品資訊問答"
        }), "：規格查詢、使用說明"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "故障診斷"
        }), "：常見問題、解決方案"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "訂單處理"
        }), "：狀態查詢、流程說明"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-研究分析助手",
      children: "3. 研究分析助手"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "學術研究"
        }), "：論文檢索、文獻分析"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "市場研究"
        }), "：報告整理、趨勢分析"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "法律研究"
        }), "：案例檢索、條文解釋"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "4-教育培訓平台",
      children: "4. 教育培訓平台"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "課程內容問答"
        }), "：教材解釋、概念澄清"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "個人化學習"
        }), "：學習進度、建議推薦"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "考試準備"
        }), "：重點整理、模擬測驗"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "技術挑戰與解決方案",
      children: "技術挑戰與解決方案"
    }), "\n", createVNode(_components.h3, {
      id: "1-文件分塊策略",
      children: "1. 文件分塊策略"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "挑戰"
      }), "：如何有效分割長文件保持語義完整性？"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "解決方案"
      }), "："]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " langchain.text_splitter "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " RecursiveCharacterTextSplitter"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "splitter "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " RecursiveCharacterTextSplitter("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    chunk_size"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    chunk_overlap"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    separators"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\".\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"!\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"?\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\",\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\" \""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-檢索品質優化",
      children: "2. 檢索品質優化"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "挑戰"
      }), "：如何提高相關文件的檢索準確率？"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "解決方案"
      }), "：混合檢索 + 重排序"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " improved_retrieval"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(query, collection):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # 1. 多查詢策略"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    expanded_queries "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " generate_similar_queries(query)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # 2. 混合檢索"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    results "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " []"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " q "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " expanded_queries:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        results.extend(hybrid_search(q, collection))"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # 3. 重排序"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    reranked_results "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " rerank_with_cross_encoder(results, query)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " reranked_results[:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-答案品質控制",
      children: "3. 答案品質控制"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "挑戰"
      }), "：如何確保生成答案的準確性？"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "解決方案"
      }), "：多重驗證機制"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " generate_verified_answer"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(question, context):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # 1. 生成答案"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    answer "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " llm.generate(question, context)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # 2. 事實檢查"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    fact_check_score "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " verify_facts(answer, context)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # 3. 相關性評估"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    relevance_score "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " assess_relevance(answer, question)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # 4. 信心度評估"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " fact_check_score "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0.8"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " relevance_score "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0.8"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"answer\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": answer, "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"confidence\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"high\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    else"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"answer\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"資訊不足，請提供更多細節\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"confidence\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"low\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "開發建議與最佳實踐",
      children: "開發建議與最佳實踐"
    }), "\n", createVNode(_components.h3, {
      id: "1-數據準備策略",
      children: "1. 數據準備策略"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "文件品質"
        }), "：確保原始文件的準確性和完整性"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "分塊大小"
        }), "：根據用途調整，問答系統建議 500-1000 tokens"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "向量模型"
        }), "：選擇適合語言的嵌入模型"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-檢索優化",
      children: "2. 檢索優化"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "混合搜尋"
        }), "：結合語義搜尋和關鍵字搜尋"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "查詢擴展"
        }), "：使用同義詞和相關詞彙增強查詢"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "結果重排"
        }), "：使用交叉編碼器重新排序檢索結果"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-生產部署",
      children: "3. 生產部署"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "快取機制"
        }), "：快取常見查詢的結果"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "監控指標"
        }), "：追蹤檢索準確率和回應時間"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "版本控制"
        }), "：維護知識庫的版本更新機制"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "未來發展趨勢",
      children: "未來發展趨勢"
    }), "\n", createVNode(_components.h3, {
      id: "短期發展-6-12-個月",
      children: "短期發展 (6-12 個月)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "多模態 RAG"
        }), "：整合圖像、音訊等多媒體內容"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "個人化檢索"
        }), "：基於用戶偏好的個人化搜尋結果"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "即時更新"
        }), "：支援流式數據的即時知識庫更新"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "中期展望-1-2-年",
      children: "中期展望 (1-2 年)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "知識圖譜整合"
        }), "：結合結構化知識提升推理能力"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "主動學習"
        }), "：系統自主學習用戶回饋優化檢索"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "跨語言 RAG"
        }), "：支援多語言文件的統一檢索"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "長期願景-2-5-年",
      children: "長期願景 (2-5 年)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "認知架構整合"
        }), "：與推理、規劃系統的深度整合"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "自適應知識管理"
        }), "：智能化的知識組織和更新"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "企業知識智能"
        }), "：成為企業決策的智能助手"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "常見問題-faq",
      children: "常見問題 FAQ"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Q1: RAG 與微調的區別是什麼？"
      }), "\nA: RAG 是在推理時動態檢索資訊，微調是在訓練時將知識嵌入模型。RAG 更靈活且成本較低，適合即時更新的知識。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Q2: 向量資料庫如何選擇？"
      }), "\nA: 小規模專案選 Chroma，中規模選 Pinecone，大規模企業選 Weaviate 或 Milvus。主要考慮數據量、查詢速度和成本。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Q3: RAG 系統的準確率如何評估？"
      }), "\nA: 使用 BLEU、ROUGE 等指標評估生成品質，使用 Precision@K、MRR 評估檢索品質，結合人工評估確保實用性。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Q4: 如何處理多語言文件？"
      }), "\nA: 使用支援多語言的嵌入模型（如 multilingual-E5），或為不同語言建立獨立的向量索引。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Q5: RAG 系統的成本結構如何？"
      }), "\nA: 主要成本包括嵌入模型 API 費用、向量資料庫儲存費用、LLM 生成費用。通常比重新訓練模型便宜 80-90%。"]
    }), "\n", createVNode(_components.h2, {
      id: "學習資源推薦",
      children: "學習資源推薦"
    }), "\n", createVNode(_components.h3, {
      id: "入門資源",
      children: "入門資源"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "官方文件"
        }), "：", createVNode(_components.a, {
          href: "https://python.langchain.com/docs/use_cases/question_answering/",
          children: "LangChain RAG 教學"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "影片教學"
        }), "：Andrew Ng 的 RAG 系列課程"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "實作專案"
        }), "：個人文件問答機器人"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "進階學習",
      children: "進階學習"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "學術論文"
        }), "：RAG 原始論文和最新研究"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "開源專案"
        }), "：研究 LangChain、LlamaIndex 的實作"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "技術部落格"
        }), "：Pinecone、Weaviate 的技術文章"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "實戰工具",
      children: "實戰工具"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "開發框架"
        }), "：LangChain、LlamaIndex、Haystack"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "向量資料庫"
        }), "：Chroma、Pinecone、Weaviate"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "評估工具"
        }), "：RAGAS、TruLens 評估框架"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "結語rag-讓-ai-擁有專屬記憶",
      children: "結語：RAG 讓 AI 擁有專屬記憶"
    }), "\n", createVNode(_components.p, {
      children: "RAG 技術代表了 AI 應用的重要演進：從依賴預訓練知識到能夠主動學習和運用專屬資訊。這不僅解決了大語言模型的知識限制問題，更開啟了企業級 AI 應用的新可能。"
    }), "\n", createVNode(_components.p, {
      children: "隨著向量資料庫技術的成熟和嵌入模型效能的提升，RAG 已經從實驗室概念發展為生產就緒的解決方案。未來，RAG 將與多模態 AI、知識圖譜等技術深度融合，成為智能系統的核心架構。"
    }), "\n", createVNode(_components.p, {
      children: "對於開發者而言，現在正是學習和應用 RAG 技術的最佳時機。從簡單的文件問答開始，逐步構建企業級的知識智能系統，讓 AI 真正成為業務創新的助推器。"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/ai/concepts/rag-complete-guide.mdx";
const file = "/Users/brian/Documents/AI/brian-jhangs-edge/src/content/ai/concepts/rag-complete-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/brian/Documents/AI/brian-jhangs-edge/src/content/ai/concepts/rag-complete-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
