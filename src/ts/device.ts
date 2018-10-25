const UA = navigator.userAgent;
export function deviceType(): string{
	if( UA.includes('iPhone')
		|| UA.includes('iPod')
		|| UA.includes('Android')
		|| UA.includes('Mobile')
	) {
		return 'mobile';
	}
	else if (UA.includes('iPad')
		|| UA.includes('Android') && !UA.includes('Mobile')
	) {
		return 'tablet';
	}
	else {
		return 'pc'
	}
}