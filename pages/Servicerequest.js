import Link from 'next/link';
const Servicerequest = () => {
    return ( <>
    <div className="app-content">
  <div className="side-app leftmenu-icon">
  <div className="page-header">
      <div className="page-leftheader">
        <h4 className="page-title">Service Request</h4>
        <ol className="breadcrumb pl-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          Service Request
          </li>
        </ol>
      </div>
      <div className="page-rightheader">
        <div className="ml-3 ml-auto d-flex">&nbsp;</div>
      </div>
    </div>



<div className="row">
  <div className="col-xl-12 col-lg-12 col-md-12">
    <div className="card">
   
      <div className="card-body">
        <div className="table-responsive">
        
        <table className="table card-table table-bordered table-vcenter text-nowrap table-primary">
  <thead className="bg-primary text-white">
    <tr>
      <th className="text-white">Service ID</th>
      <th className="text-white">Name</th>
      <th className="text-white">Services</th>
      <th className="text-white">Email ID</th>
      <th className="text-white">Address</th>
      <th className="text-white">Zip Code</th>
      <th className="text-white">Date</th>
      <th className="text-white">Time</th>
      <th className="text-white">Assigned to</th>
      <th className="text-white">Payment</th>
      <th className="text-white">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ser123</th>
      <td>Joan Powell</td>
      <td>AC Repair</td>
      <td>Joan@gmail.com</td>
      <td>Los Angeles</td>
      <td>56584</td>
      <td>18 Oct 2023</td>
      <td>10:00AM</td>
      <td>
        <select className="form-control" tabIndex={-1} aria-hidden="true">
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <span className="unpaid">Unpaid</span>
      </td>
      <td>
        <a className="actionsubmit" href="/serviceschedule#">
          Submit
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ser123</th>
      <td>Joan Powell</td>
      <td>AC Repair</td>
      <td>Joan@gmail.com</td>
      <td>Los Angeles</td>
      <td>56584</td>
      <td>18 Oct 2023</td>
      <td>10:00AM</td>
      <td>
        <select className="form-control" tabIndex={-1} aria-hidden="true">
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <span className="paid">Paid</span>
      </td>
      <td>
        <a className="actionsubmit" href="/serviceschedule#">
          Submit
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ser123</th>
      <td>Joan Powell</td>
      <td>AC Repair</td>
      <td>Joan@gmail.com</td>
      <td>Los Angeles</td>
      <td>56584</td>
      <td>18 Oct 2023</td>
      <td>10:00AM</td>
      <td>
        <select className="form-control" tabIndex={-1} aria-hidden="true">
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <span className="unpaid">Unpaid</span>
      </td>
      <td>
        <a className="actionsubmit" href="/serviceschedule#">
          Submit
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ser123</th>
      <td>Joan Powell</td>
      <td>AC Repair</td>
      <td>Joan@gmail.com</td>
      <td>Los Angeles</td>
      <td>56584</td>
      <td>18 Oct 2023</td>
      <td>10:00AM</td>
      <td>
        <select className="form-control" tabIndex={-1} aria-hidden="true">
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <span className="paid">Paid</span>
      </td>
      <td>
        <a className="actionsubmit" href="/serviceschedule#">
          Submit
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ser123</th>
      <td>Joan Powell</td>
      <td>AC Repair</td>
      <td>Joan@gmail.com</td>
      <td>Los Angeles</td>
      <td>56584</td>
      <td>18 Oct 2023</td>
      <td>10:00AM</td>
      <td>
        <select className="form-control" tabIndex={-1} aria-hidden="true">
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <span className="unpaid">Unpaid</span>
      </td>
      <td>
        <a className="actionsubmit" href="/serviceschedule#">
          Submit
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ser123</th>
      <td>Joan Powell</td>
      <td>AC Repair</td>
      <td>Joan@gmail.com</td>
      <td>Los Angeles</td>
      <td>56584</td>
      <td>18 Oct 2023</td>
      <td>10:00AM</td>
      <td>
        <select className="form-control" tabIndex={-1} aria-hidden="true">
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <span className="paid">Paid</span>
      </td>
      <td>
        <a className="actionsubmit" href="/serviceschedule#">
          Submit
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ser123</th>
      <td>Joan Powell</td>
      <td>AC Repair</td>
      <td>Joan@gmail.com</td>
      <td>Los Angeles</td>
      <td>56584</td>
      <td>18 Oct 2023</td>
      <td>10:00AM</td>
      <td>
        <select className="form-control" tabIndex={-1} aria-hidden="true">
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <span className="unpaid">Unpaid</span>
      </td>
      <td>
        <a className="actionsubmit" href="/serviceschedule#">
          Submit
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ser123</th>
      <td>Joan Powell</td>
      <td>AC Repair</td>
      <td>Joan@gmail.com</td>
      <td>Los Angeles</td>
      <td>56584</td>
      <td>18 Oct 2023</td>
      <td>10:00AM</td>
      <td>
        <select className="form-control" tabIndex={-1} aria-hidden="true">
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <span className="paid">Paid</span>
      </td>
      <td>
        <a className="actionsubmit" href="/serviceschedule#">
          Submit
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ser123</th>
      <td>Joan Powell</td>
      <td>AC Repair</td>
      <td>Joan@gmail.com</td>
      <td>Los Angeles</td>
      <td>56584</td>
      <td>18 Oct 2023</td>
      <td>10:00AM</td>
      <td>
        <select className="form-control" tabIndex={-1} aria-hidden="true">
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <span className="unpaid">Unpaid</span>
      </td>
      <td>
        <a className="actionsubmit" href="/serviceschedule#">
          Submit
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ser123</th>
      <td>Joan Powell</td>
      <td>AC Repair</td>
      <td>Joan@gmail.com</td>
      <td>Los Angeles</td>
      <td>56584</td>
      <td>18 Oct 2023</td>
      <td>10:00AM</td>
      <td>
        <select className="form-control" tabIndex={-1} aria-hidden="true">
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <span className="paid">Paid</span>
      </td>
      <td>
        <a className="actionsubmit" href="/serviceschedule#">
          Submit
        </a>
      </td>
    </tr>
  </tbody>
</table>

        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    </> );
}
 
export default Servicerequest;