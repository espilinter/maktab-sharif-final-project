import { PageContaner } from "../../layout/index"
import Category from "../../components/category/Category"
import SubCategory from "../../components/subCategory/SubCategory"
import Title from "../../components/Title/Title"
const App = () => {
    return (
        <>
            <PageContaner>
                <div className="flex">
                    <div className="bg-#FBFBFB w-364 border-l-2 ">
                        <Category title={"کالاهای اساسی و خوار بار"} />
                        <SubCategory title={"برنج"} />
                        <SubCategory title={"نان"} />
                        <SubCategory title={"قند"} />
                        <SubCategory title={"نبات"} />
                        <Category title={"محصولات پروتئینی"} />
                        <SubCategory title={"گوشت گاو و گوساله"} />
                        <SubCategory title={"گوشت مرغ"} />
                        <SubCategory title={"تخم مرغ"} />
                        <SubCategory title={"ماهی ، میگو و خاویار"} />
                        <Category title={"نوشیدنی"} />
                        <SubCategory title={"قهوه"} />
                        <SubCategory title={"چای و دمنوش"} />

                        <Category title={"لبنیات"} />
                        <SubCategory title={"شیر"} />
                        <SubCategory title={"دوغ"} />
                        <SubCategory title={"کره"} />
                        <SubCategory title={"ماست"} />
                    </div>
                    <div>
                        <Title title={""} />
                    </div>
                </div>
            </PageContaner>
        </>
    )
}

export default App;