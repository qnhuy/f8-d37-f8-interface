import { useState } from 'react'
import clsx from 'clsx'

import styles from './SearchForm.module.scss'
import Tippy from '../../../../../../components/Tippy'

const placeholderImgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNer1ZryNxWVXojlY9Hoyy1-4DVNAmn7lrg&s'
const searchData = [
    {
        group: 'Courses',
        items: [
            {
                imgUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
                itemName: 'JavaScript Fundamental'
            },
            {
                imgUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
                itemName: 'JavaScript Advanced'
            },
            {
                imgUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png',
                itemName: 'JavaScript Pro'
            },
        ]
    },
    {
        group: 'Blogs',
        items: [
            {
                imgUrl: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/209/613cdf3fd481b.jpg',
                itemName: 'Is it true if you should not learn Javascript?'
            },
            {
                imgUrl: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/1017/6172259a3e59f.png',
                itemName: 'JavaScript Asynchronous'
            },
            {
                imgUrl: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/343/6142b3b4cfa6f.jpg',
                itemName: 'Should we use "===" or "==" to compare in JavaScript?'
            },
        ]
    },
    {
        group: 'Videos',
        items: [
            {
                imgUrl: 'https://i.ytimg.com/vi/YFhyq-CMGtY/maxresdefault.jpg',
                itemName: 'Explain "unreasonable" cases in JavaScript'
            },
            {
                imgUrl: 'https://i.ytimg.com/vi/utF5vj7Ljuo/maxresdefault.jpg',
                itemName: 'Solve "Kid Coding" by JavaScript?'
            },
            {
                imgUrl: 'https://i.ytimg.com/vi/a4FjX4Z-9Rs/maxresdefault.jpg',
                itemName: 'Methos Fn.apply() in JavaScript'
            },
        ]
    },
]

const SearchForm = function () {
    const [inputValue, setInputValue] = useState('')
    const [focusing, setFocusing] = useState(false)

    const wrapperClasses = clsx(styles.searchWrapper, { [styles.border]: focusing })

    return (
        <div className={wrapperClasses}>
            <i className={`${styles.searchIcon} ${styles.icon} fa-solid fa-magnifying-glass`}></i>
            <input
                className={styles.input}
                type="text"
                placeholder='Searching...'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onFocus={() => {
                    setFocusing(true)
                }}
            />
            <i
                className={inputValue ? `${styles.cancelIcon} ${styles.icon} fa-solid fa-xmark` : ''}
                onClick={() => setInputValue('')}
            />

            {focusing &&
                <Tippy
                    className={styles.tippyWrapper}
                    onRequestClose={() => setFocusing(false)}
                    dependClass={styles.searchWrapper}
                >
                    <div className={styles.resultTitle}>
                        <i className={`fa-solid fa-magnifying-glass`}></i>
                        <p>Result of "{inputValue}"</p>
                    </div>

                    {searchData.map((data, index) => <div key={index}>
                        <div className={styles.searchBlock}>
                            <div className={styles.blockTitle}>
                                <h3>{data.group}</h3>
                                <p className={styles.blockSeeMore}>See more</p>
                            </div>

                            {data.items.map((item, index) => <div key={index} className={styles.resultItem}>
                                <img
                                    className={styles.itemImg}
                                    src={item.imgUrl || placeholderImgUrl}
                                    alt={item.itemName} />
                                <p>{item.itemName}</p>
                            </div>
                            )}
                        </div>
                    </div>)}
                </Tippy>
            }
        </div>

    )
}

export default SearchForm