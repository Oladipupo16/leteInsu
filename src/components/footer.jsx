export default function AppFooter() {
    const currentYear = new Date().getFullYear();
    return (
        <section className="footer">
            <div>
                <p>&copy; {currentYear}.All right reserved </p>
            </div>
            <div>
            <i class="fa-brands fa-facebook"></i> 
            <i class="fa-brands fa-square-x-twitter"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-linkedin"></i> 
            </div>

        </section>
    )
}