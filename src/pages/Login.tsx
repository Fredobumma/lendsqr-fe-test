import {
	Button,
	Figure,
	Heading,
	Picture,
	Text,
	TextInput,
} from "src/baseElements";
import { login_img_png, login_img_webp, logo } from "src/assets";

const Login = () => {
	return (
		<main>
			<section className="login-form">
				<div className="block">
					<Figure altText="logo" image={logo} containerStyles="image logo" />
					<Picture
						altText="Login"
						className="image"
						pngImage={login_img_png}
						webpImage={login_img_webp}
					/>
				</div>
				<div className="block">
					<div className="form-container">
						<Heading
							tag="h1"
							className="heading form__heading"
							children="Welcome!"
						/>
						<Text className="sub__title" children="Enter details to login." />
						<Picture
							altText="Login"
							className="image"
							pngImage={login_img_png}
							webpImage={login_img_webp}
						/>
						<form className="form">
							<TextInput name="email" type="text" placeholder="Email" />
							<TextInput
								name="password"
								type="password"
								placeholder="Password"
							/>
							<a href="/" className="form__text">
								forgot password?
							</a>
							<Button tag="button" children="log in" className="btn--fill" />
						</form>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Login;
// Login page.
