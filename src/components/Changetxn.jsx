import React from 'react'

function Changetxn() {
  return (
    <div className="mb-5">
        <h1 className='text-light'>TRANSACTION PASSWORD</h1>

        <div className="rounded border-light bg-light rounded">
            
        <label for="" class="form-label ms-2 mt-4">Enter Current Txn Password</label>
        <div className="input-group pt-2 pb-2 pe-2 ps-2">
          <input
            type="password" class="form-control mb-2 border border-dark"
            placeholder="Current Txn Password" aria-label="password" aria-describedby="basic-addon1" />
        </div>
        </div>
        <button
                type="submit"
                name="Submit"
                value="Continue"
                class="btn btn-warning mr-2 mt-2"
              >
                Submit
              </button>
    </div>
  )
}

export default Changetxn