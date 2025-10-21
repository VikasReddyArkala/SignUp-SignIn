import { months } from "../data/months";
import "../styles/SignUp.css";

function SignUp() {
    
    return (
        <div className="sign-up-container">
            <form className="sign-up-form">
                <h2>Create a new account</h2>
                <div className="name">
                    <input type="text" placeholder="Firstname" />
                    <input type="text" placeholder="Lastname" />
                </div>
                <label className="dob">
                    Birthday?
                    <select name="dob-month">
                        {months.map(month => 
                            <option key={month.id} value={month.id}>{month.name}</option>
                        )};
                    </select>
                    <select name="dob-day">
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day =>
                            <option key={day} value={day}>{day}</option>
                        )};
                    </select>
                    <select name="dob-year">
                        {Array.from({ length: 121 }, (_, i) => new Date().getFullYear() - i).map(year =>
                            <option key={year} value={year}>{year}</option>
                        )};
                    </select>
                </label>
                <div className="gender" role="radiogroup" aria-label="Gender">
                    <label className="gender-option">
                        <input type="radio" name="gender" value="Male" />
                        <span>Male</span>
                    </label>
                    <label className="gender-option">
                        <input type="radio" name="gender" value="Female" />
                        <span>Female</span>
                    </label>
                </div>

                <input type="text" placeholder="Email" />
                <input type="password" placeholder="New password" />

                <button className="sign-up-button" type="submit">Sign Up</button>
                <a href="/">Already have an account?</a>
            </form>
        </div>
    );
}

export default SignUp;