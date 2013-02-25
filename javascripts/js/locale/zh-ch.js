/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "zh-ch",
		api: {
			wikipedia: "en"
		},
		date: {
			month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			month_abbr: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			day: ["星期天","星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
			day_abbr: ["星期天","星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "mmm d",
			full: "mmmm d',' yyyy",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long: "mmm d',' yyyy 'at' h:MM TT",
			full_long_small_date: "h:MM TT'<br/><small>mmm d',' yyyy'</small>'"
		},
		messages: {
			loading_timeline: "载入时间轴",
			return_to_title: "Return to Title",
			expand_timeline: "Expand Timeline",
			contract_timeline: "Contract Timeline",
			wikipedia: "From Wikipedia, the free encyclopedia",
			loading_content: "载入内容",
			loading: "载入"
		}
	}
}
