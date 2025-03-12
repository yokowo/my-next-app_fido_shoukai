import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, PhoneCall, Mail, AlertCircle, ArrowDown } from "lucide-react"

export default function BusinessRecoveryLP() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="bg-[#00603e] text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">株式会社オシリス</h1>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* メインビジュアル */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00603e]">事業再生のご相談紹介</h2>
          <p className="text-lg text-gray-600">お客様の事業の再生をサポートいたします</p>
        </div>

        {/* ご紹介の流れ */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-[#00603e]">ご紹介の流れ</h3>
          <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
            <Card className="shadow-lg w-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#00603e] text-white rounded-full w-8 h-8 flex items-center justify-center">1</div>
                  <h4 className="text-xl font-semibold">フォーム入力</h4>
                </div>
                <p>お手数ですが、ご紹介フォームに必要事項をご入力ください。</p>
              </CardContent>
            </Card>

            <ArrowDown className="h-8 w-8 text-[#00603e]" />

            <Card className="shadow-lg w-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#00603e] text-white rounded-full w-8 h-8 flex items-center justify-center">2</div>
                  <h4 className="text-xl font-semibold">確認のご連絡</h4>
                </div>
                <p>担当弁護士または事務局からご紹介様に確認のご連絡をいたします。</p>
              </CardContent>
            </Card>

            <ArrowDown className="h-8 w-8 text-[#00603e]" />

            <Card className="shadow-lg w-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#00603e] text-white rounded-full w-8 h-8 flex items-center justify-center">3</div>
                  <h4 className="text-xl font-semibold">ご相談対応</h4>
                </div>
                <p>弁護士または事務局からご相談者様にご連絡して、ご相談に対応いたします。</p>
              </CardContent>
            </Card>

            <ArrowDown className="h-8 w-8 text-[#00603e]" />

            <Card className="shadow-lg w-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#00603e] text-white rounded-full w-8 h-8 flex items-center justify-center">4</div>
                  <h4 className="text-xl font-semibold">経過報告</h4>
                </div>
                <p>相談日時が決まったとき、相談が終わったときは、その旨をご報告させていただきます。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTAボタン */}
        <div className="text-center py-8">
          <Button
            className="bg-[#00603e] hover:bg-[#004e33] text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300"
            onClick={() => (window.location.href = "https://form.run/@marketing-q6RS5sC7t5C8IgoJvKYB")}
          >
            ご紹介フォームへ進む
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* 注意事項 */}
        <section className="bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-[#00603e] mb-6">注意事項</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <PhoneCall className="h-6 w-6 text-[#00603e] flex-shrink-0 mt-1" />
              <p>ご相談者様には、電話、メール、ショートメールにてご連絡いたします。</p>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-6 w-6 text-[#00603e] flex-shrink-0 mt-1" />
              <p>ご相談者の電話番号はなるべく携帯電話でお願いいたします。</p>
            </div>
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-[#00603e] flex-shrink-0 mt-1" />
              <p>ご相談者の応答がない場合、ご対応を終了させていただくことがあります。</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-[#00603e] flex-shrink-0 mt-1" />
              <p>ご紹介により成約した場合には当社所定のお礼をさせていただきます。詳細は担当者にお尋ねください。</p>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-[#00603e] text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 株式会社オシリス. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

