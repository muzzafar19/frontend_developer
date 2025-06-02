import React from 'react'
import Footer from '../Coman/Footer'
import Header from '../Coman/Header'
import Coheader from '../Coman/Coheader'

function Blogdetail() {
    return (
        <div>
            <Header />
            <Coheader title="Detail Page" subtitle="home" desc="detail page" />
            {/* Blog Detail Start */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <img className="img-fluid mb-4" src="img/carousel-1.jpg" alt="Image" />
                        <div className="d-flex align-items-center mb-4">
                            <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: 100, height: 100 }}>
                                <span>01</span>
                                <strong className="text-uppercase m-0 text-white">Jan</strong>
                                <span>2045</span>
                            </div>
                            <div className="pl-3">
                                <h1 className="font-weight-bold mb-3">Lorem ipsum dolor sit amet</h1>
                                <div className="d-flex">
                                    <span className="mr-2 text-muted"><i className="fa fa-user" /> Admin</span>
                                    <span className="mr-2 text-muted"><i className="fa fa-folder" /> Web Design</span>
                                    <span className="mr-2 text-muted"><i className="fa fa-comments" /> 15 Comments</span>
                                </div>
                            </div>
                        </div>
                        <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero, eos tempor gubergren clita est consetetur dolores et dolor. Sadipscing lorem kasd labore ea sanctus sanctus, dolores invidunt et consetetur et duo. Tempor dolores accusam sit vero sit, sed labore duo vero et at, et amet et justo gubergren. Labore aliquyam voluptua dolor nonumy lorem. Sanctus sed sadipscing rebum ipsum dolor et ea no. Ipsum elitr sea erat.</p>
                        <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt, sed duo dolor et amet no et. Ut takimata tempor kasd amet kasd ut. No et ipsum amet tempor et. Sed nonumy sed vero ut, sed aliquyam accusam clita dolores tempor est. Ea et takimata consetetur et amet sanctus. Duo no diam ipsum diam dolores, eirmod diam dolores clita sed erat magna. Dolore ut amet ea magna. Sea et dolore sit labore at amet eos. Dolor voluptua sit rebum sit ut nonumy. Dolor amet amet sit sadipscing, lorem.</p>
                        <h2 className="mb-4 font-weight-bold">Est dolor lorem et ea</h2>
                        <img className="w-50 float-left mr-4 mb-3" src="img/blog-1.jpg" alt="Image" />
                        <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos. Dolores et no stet magna et gubergren amet dolor sit, lorem dolore est vero et. Justo erat magna ipsum magna sea. Magna amet est sit sed sadipscing. At takimata dolores ut dolore takimata stet nonumy ipsum, gubergren vero ea consetetur aliquyam kasd est magna justo, dolore justo at dolore et aliquyam nonumy lorem gubergren. Amet duo invidunt kasd labore aliquyam. Vero dolores lorem elitr justo ut, accusam erat sed dolor at accusam takimata ipsum sea diam. Ipsum voluptua lorem sed amet, amet sea sit et at nonumy labore takimata, justo ipsum voluptua stet takimata. Ea lorem elitr aliquyam gubergren sit magna sanctus, sed sed dolore ipsum justo dolor et amet invidunt erat. Sadipscing sanctus stet.</p>
                        <h3 className="mb-4 font-weight-bold">Est dolor lorem et ea</h3>
                        <img className="w-50 float-right ml-4 mb-3" src="img/blog-2.jpg" alt="Image" />
                        <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos. Dolores et no stet magna et gubergren amet dolor sit, lorem dolore est vero et. Justo erat magna ipsum magna sea. Magna amet est sit sed sadipscing. At takimata dolores ut dolore takimata stet nonumy ipsum, gubergren vero ea consetetur aliquyam kasd est magna justo, dolore justo at dolore et aliquyam nonumy lorem gubergren. Amet duo invidunt kasd labore aliquyam. Vero dolores lorem elitr justo ut, accusam erat sed dolor at accusam takimata ipsum sea diam. Ipsum voluptua lorem sed amet, amet sea sit et at nonumy labore takimata, justo ipsum voluptua stet takimata. Ea lorem elitr aliquyam gubergren sit magna sanctus, sed sed dolore ipsum justo dolor et amet invidunt erat. Sadipscing sanctus stet.</p>
                    </div>
                    <div className="col-12 pt-4">
                        <div className="media bg-secondary text-white mb-4 p-5">
                            <img src="img/user.jpg" alt="Image" className="mr-3 mt-1 rounded-circle p-3 bg-dark" style={{ width: 150 }} />
                            <div className="media-body">
                                <h4 className="text-primary mb-3">John Doe</h4>
                                <p className="m-0">Consetetur elitr erat vero sanctus labore dolor ipsum et diam, tempor dolores eos dolor consetetur lorem ipsum, ipsum accusam ipsum sit no ut est. Gubergren ea ipsum erat consetetur magna kasd amet est, voluptua magna elitr ea sit justo sed sanctus. Accusam duo duo sit sit. Ut eos ipsum sed takimata sed dolor justo, elitr no labore amet et et sanctus. Duo invidunt magna diam no clita, ea eos vero sanctus est aliquyam et, dolores gubergren eirmod sea invidunt no kasd. Amet ut sadipscing eirmod et dolore. Sed lorem stet aliquyam ipsum eos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-4">
                        <h3 className="mb-4 font-weight-bold">3 Comments</h3>
                        <div className="media mb-4">
                            <img src="img/user.jpg" alt="Image" className="mr-3 mt-1 rounded-circle" style={{ width: 60 }} />
                            <div className="media-body">
                                <h4>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h4>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                                <button className="btn btn-sm btn-dark">Reply</button>
                            </div>
                        </div>
                        <div className="media mb-4">
                            <img src="img/user.jpg" alt="Image" className="mr-3 mt-1 rounded-circle" style={{ width: 60 }} />
                            <div className="media-body">
                                <h4>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h4>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                                <button className="btn btn-sm btn-dark">Reply</button>
                                <div className="media mt-4">
                                    <img src="img/user.jpg" alt="Image" className="mr-3 mt-1 rounded-circle" style={{ width: 60 }} />
                                    <div className="media-body">
                                        <h4>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h4>
                                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                                        <button className="btn btn-sm btn-dark">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <h3 className="mb-4 font-weight-bold">Leave a comment</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="website">Website</label>
                                <input type="url" className="form-control" id="website" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea id="message" cols={30} rows={5} className="form-control" defaultValue={""} />
                            </div>
                            <div className="form-group">
                                <input type="submit" defaultValue="Leave Comment" className="btn btn-outline-primary px-3" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Blog Detail End */}
            <Footer />
        </div>
    )
}

export default Blogdetail
