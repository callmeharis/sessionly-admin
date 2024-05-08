import React from "react";

import BaseControl from "./BaseControl";

function BaseSelect({
	append,
	prepend,
	formik,
	required,
	className,
	enumType,
	options,
	valueKey = "value",
	labelKey = "label",
	labelPrefix,
	createLabel,
	label,
	placeholder,
	value,
	onChange,
	handleBlur,
	readOnly,
	name,
	touched,
	error,
}) {

	if (formik) {
		/**
		 * @type {import('formik').FieldMetaProps}
		 */
		const meta = formik.getFieldMeta(name);

		if (meta) {
			value = meta.value;
			touched = meta.touched;
			error = meta.error;
		}
		onChange = onChange || formik.handleChange;
		handleBlur = handleBlur || formik.handleBlur;
	}

	if (typeof enumType === "object") {
		options = Object.entries(enumType).map(([key, value]) => ({
			[valueKey]: value,
			[labelKey]: value,
		}));
	} else if (options && options.length > 0 && typeof options[0] !== "object") {
		options = options.map((v) => ({
			[valueKey]: v,
			[labelKey]: v,
		}));
	} else if (createLabel) {
		options = options.map((v) => ({
			[valueKey]: v[valueKey],
			[labelKey]: createLabel(v),
		}));
	}

	/**
	 *
	 * @param {React.ChangeEvent<HTMLSelectElement>} e
	 */
	function onChangeProxy(e) {
		const { name, value } = e.target;

		if (!onChange) return;

		if (!value) {
			onChange({
				...e,
				target: {
					...e.target,
					name: name,
					value: null,
				},
			});
		} else onChange(e);
	}

	return (
		<BaseControl
			className={className}
			name={name}
			label={label}
			required={required}
			formik={formik}
			touched={touched}
			error={error}
			prepend={prepend}
			append={append}
		>
			<select
				value={value == null ? "" : value}
				onChange={onChangeProxy}
				onBlur={handleBlur}
				disabled={readOnly}
				name={name?.toString()}
				className={`form-select ${error ? "" : ""}`}
			>
				{placeholder && (
					<option value="">
						{placeholder === true
							? `Select ${label || name}`
							: placeholder.toString()}
					</option>
				)}
				{options &&
					options.map((v, i) => (
						<option key={i} value={v[valueKey]}>
							{v[labelKey]}
							{/* {t(labelPrefix ? `${labelPrefix}.${v[labelKey]}` : v[labelKey])} */}
						</option>
					))}
			</select>
		</BaseControl>
	);
}

export default BaseSelect;
