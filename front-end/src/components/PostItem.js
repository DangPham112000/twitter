import React from 'react'

export default function PostItem() {
    return (
        <div className="post-item">
            <p className="post-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur tempore ad molestias rem dolores. A libero delectus minima natus maiores perspiciatis eligendi modi doloremque, dolores aliquam. Enim, id nulla.
            </p>
            <div className="post-footer">
                <div className="post-infos">
                    <span>Dang</span>
                    <span>Date: 14/11/2021</span>
                </div>
                <div className="post-edit-delete">
                    <span>Edit</span>
                    <span>Delete</span>
                    <span className="delete-question">Are you sure?</span>
                    <span>Yes</span>
                    <span>No</span>
                </div>
            </div>
            <div className="post-edit-form">
                <form action="" className="edit-form">
                    <textarea
                        type="text"
                        name="content"
                        id="content"
                        className="content"
                        placeholder="What's happen?"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam, nisi qui eos ab fugiat quibusdam omnis ratione molestias reprehenderit delectus quia eligendi perferendis, reiciendis esse eius aliquam blanditiis laborum!
                    </textarea>
                    <div className="btn-container">
                        <button className="btn" type="button">Update</button>
                        <button className="btn" type="button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
