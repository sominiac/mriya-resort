import React from 'react';

function Information() {
    return (
        <section className="information">
            <div className="container">
                <div className="information__inner">
                    <h2 className="information__title">Mriya Resort & SPA —<br /><span className="information__title information__title_bold">больше чем просто отдых</span></h2>

                    <div className="information__icon"></div>

                    <div className="information__wrapper">
                        <p className="information__text">
                            В окружении необычного природного ландшафта курорт становится по-настоящему уникальным. Это
                            место
                            идеально
                            для тех, кто больше гор любит только море.
                        </p>
                    </div>

                    <button className="information__button">О комплексе</button>
                </div>
            </div>
        </section>
    )
}

export default Information;
