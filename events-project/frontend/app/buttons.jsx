import button from './button_style.css';

export default function Buttons() {
    return (
        <div class="container">
            <div class="button-icon">
                <div class="cube">
                    <span class="side front">Home</span>
                    <span class="side top">Go To Home</span>
                </div>
            </div>

            <div class="button-icon">
                <div class="cube">
                    <span class="side front">About</span>
                    <span class="side top">About Me</span>
                </div>
            </div>

            <div class="button-icon">
                <div class="cube">
                    <span class="side front">Linkedin</span>
                    <span class="side top">Go To my Linkedin</span>
                </div>
            </div>
        </div>
    );
}