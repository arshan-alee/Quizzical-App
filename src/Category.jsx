import React from 'react'

export default function Category(props) {
    return (
        <div>
            <label>Select a Category:</label>
            <select className='select' value={props.category} onChange={props.handleCategory}>
                <option value="">Any Category</option>
                <option value="&category=27">Animals</option>
                <option value="&category=25">Art</option>
                <option value="&category=26">Celebrities</option>
                <option value="&category=16">Entertainment: Board Games</option>
                <option value="&category=10">Entertainment: Books</option>
                <option value="&category=32">Entertainment: Cartoon & Animations</option>
                <option value="&category=29">Entertainment: Comics</option>
                <option value="&category=11">Entertainment: Film</option>
                <option value="&category=31">Entertainment: Japanese Anime & Manga</option>
                <option value="&category=12">Entertainment: Music</option>
                <option value="&category=13">Entertainment: Musical and Theatres</option>
                <option value="&category=14">Entertainment: Television</option>
                <option value="&category=15">Entertainment: Video Games</option>
                <option value="&category=9">General Knowledge</option>
                <option value="&category=22">Geography</option>
                <option value="&category=23">History</option>
                <option value="&category=20">Mythology</option>
                <option value="&category=24">Politics</option>
                <option value="&category=17">Science & Nature</option>
                <option value="&category=18">Science: Computers</option>
                <option value="&category=30">Science: Gadgets</option>
                <option value="&category=19">Science: Mathematics</option>
                <option value="&category=21">Sports</option>
                <option value="&category=28">Vehicles</option>
            </select></div>
    )
}
