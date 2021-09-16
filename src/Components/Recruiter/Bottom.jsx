import React from 'react'
import "./Bottom.css"

export const Bottom = () => {
	return (
		<div>
			<div id="page-footer" className="footer">

				<div className="footer-column-container">
					<div className="footer-column">
						<ul className="footer-links-list">
							<li className="footer-link-item header-link"><a className="link-header">Company</a></li>
							<li className="footer-link-item"><a className="homeLink" href="/">Home</a></li>
							<li className="footer-link-item"><a href="/">About Us</a></li>
							<li className="footer-link-item"><a href="/">Contact</a></li>
						</ul>
					</div>

					<div className="footer-column">
						<ul className="footer-links-list">
							<li className="footer-link-item header-link"><a className="link-header">Information</a></li>
							<li className="footer-link-item"><a href="/">Blog</a></li>
							<li className="footer-link-item"><a href="/">Sitemap</a></li>
							<li className="footer-link-item"><a href="/">FAQ</a></li>
							<li className="footer-link-item"><a href="/">Privacy</a></li>
						</ul>
					</div>

					{/* <div className="footer-column">
			<ul className="footer-links-list">
				<li className="footer-link-item"><a href="/refund">Refund</a></li>
				<li className="footer-link-item"><a href="/terms-condition">Terms</a></li>
			</ul>
		</div>  */}

					<div className="footer-column platforms">
						<ul className="footer-links-list platforms-list">
							<li className="footer-link-item header-link"><a className="link-header">Other Portals</a></li>
							<li className="footer-link-item"><a href="/">iimjobs.com - MBA Jobs</a></li>
							<li className="footer-link-item"><a href="/">updazz.com - Sales Jobs</a></li>
							<li className="footer-link-item"><a href="/">engineeristic.com - Engineering Jobs</a></li>
							<li className="footer-link-item"><a href="/">biojoby.com - Medical Jobs</a></li>
						</ul>
					</div>
					<div className="footer-column platforms">
						<ul className="footer-links-list">
							<li className="footer-link-item header-link"><a className="link-header">Sales Enquiries</a></li>
							<li className="footer-link-item"><a href="/">Toll Free  No. (9:30 AM to 6:30 PM)</a></li>
							<li className="footer-link-item">
								<span className="icon"><i className="icon-telephone"></i></span>
								<a className="font-16">1800-103-7344</a>
							</li>
							<li className="footer-link-item">
								<span className="icon"><i className="icon-email_envelope"></i></span>
								<a className="font-16">buynow@hirist</a>
							</li>
							<li className="footer-link-item mt-10"><a href="/">Customer Support</a></li>
							<li className="footer-link-item">
								<span className="icon"><i className="icon-email_envelope"></i></span>
								<a className="font-16">info@hirist</a>
							</li>
						</ul>
					</div>

					<div className="footer-column platforms">

					</div>
				</div>

				<div className="footer-social-media">
					<div className="social-media-icon facebook"><a href="https://www.facebook.com/hirist.jobs/"><i className="icon-facebook"></i></a></div>
					<div className="social-media-icon linkedin"><a href="https://www.linkedin.com/company/hirist-com/"><i className="icon-linkedin"></i></a></div>
					<div className="social-media-icon twitter"><a href="https://twitter.com/hirist_jobs"><i className="icon-twitter"></i></a></div>
				</div>

				<div className="footer-copy-text">
					<p> hirist.com © 2021. All rights reserved.</p>
				</div>

			</div>
		</div>
	)
}
