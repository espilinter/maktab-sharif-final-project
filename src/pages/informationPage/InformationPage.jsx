import PageContainer from "../../layout/pageContainer/pageContainer.layout";

const InformationPage = () => {
    return (
        <PageContainer>
            <h1 className="text-right mr-14% text-20 mt-30">نهایی کردن خرید</h1>
            <form className="grid w-80% m-auto grid-cols-2 mt-20">
                <div className="mt-20">
                    <label className="block text-right w-80% m-auto mb-10">نام:</label>
                    <input type="text" className="w-80% border-2 border-#5a5a5a border-solid m-auto text-right pr-5" />
                </div>
                <div className="mt-20">
                    <label className="block text-right w-80% m-auto mb-10">نام خانوادگی:</label>
                    <input type="text" className="w-80% border-2 border-#5a5a5a border-solid m-auto text-right pr-5" />
                </div>
                <div className="mt-20">
                    <label className="block text-right w-80% m-auto mb-10">آدرس:</label>
                    <textarea className="w-80% border-2 border-#5a5a5a border-solid m-auto text-right pr-5"></textarea>
                </div>
                <div className="mt-20">
                    <label className="block text-right w-80% m-auto mb-10">تلفن:</label>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="w-80% border-2 border-#5a5a5a border-solid m-auto text-right pr-5" />
                </div>
                <div className="mt-20">
                    <label className="block text-right w-80% m-auto mb-10">تاریخ تحویل:</label>
                    <input type="date" min="2022-02-05" max="2022-1-10" className="w-80% border-2 border-#5a5a5a border-solid m-auto text-right pr-5" />
                </div>
            </form>
            <a href="/paymentPage">
                <button className="shadow-button bg-#1EAB24 text-white w-120 h-35 rounded-lg mt-40">پرداخت</button>
            </a>
        </PageContainer>
    )
}

export default InformationPage;