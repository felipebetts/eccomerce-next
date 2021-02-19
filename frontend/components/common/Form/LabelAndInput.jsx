import TextField from '@material-ui/core/TextField'

function LabelAndInput(props) {
    return (
        <div style={{ margin: "20px 0px" }}>
            <TextField label={props.label}
                type={props.type}
                size="small" 
                variant="outlined"
                value={props.value}
                onChange={props.onChange}
                fullWidth
                 />
        </div>
    )
}

export default LabelAndInput