import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons"

 const Dropdown = ({onClick, onSelect, items, iconCss, cssClass, style, title}) => {
    return (
        <DropDownButtonComponent
        select={onSelect}
        onClick={onClick}
        items={items}
        iconCss={iconCss}
        cssClass={cssClass}
        style={style}
      >
        {title}
      </DropDownButtonComponent>
    )
}

export default Dropdown