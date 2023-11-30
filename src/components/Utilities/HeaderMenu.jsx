import { Title } from "@material-ui/icons"

const HeaderMenu = ({title}) => {
    return (
        <div className="p-8">
            <h3 className="text-color-primary text-2xl text-center font-bold">{title}</h3>
        </div>
    )
}

export default HeaderMenu