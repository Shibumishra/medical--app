import React from 'react'

const categories = [
    'All',
    'ACE Inhibitor',
    'Analgesic',
    'Anti-Alzheimers',
    'Anti-Arrhythmic',
    'Anti-Convulsant',
    'Anti-Emetic',
    'Anti-Fungal',
    'Anti-Glaucoma',
    'Anti-Hypertension',
    'Anti-Hypertensive',
    'Anti-Parkinson',
    'Anti-Psychotic',
    'Anti-Ulcerant',
    'Anti-Spasmodic',
    'Anti-coagulant',
    'Anti-depressant',
    'Anti-diabetic',
    'Calcimimetic',
    'Diuretics',
    'Ectoparasiticide',
    'Eugeroic',
    'Hyperkinetic Movement Disorder',
    'Iron Chelator',
    'Lipid regulating agent',
    'Luteolytic Agent',
    'Muscle Relaxant',
    'NSAID',
    'Nicotinic Antagonist',
    'Urinary Incontinence',
]

function Filter(props) {
    return (
        <div>
            <form className="mb-5 medicine-filter" style={{ width: '80%', display: 'block', margin: 'auto' }}>
                <div className="form-row">
                    <div className="form-group col-6 col-md-6">
                        <label>Filter by Products</label>
                        <select
                            className="form-control form-control-lg"
                            value="category"
                            name="category"
                        >
                            <option> -- select an option -- </option>
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group col-6 col-md-6">
                        <label>Filter by Medicine Price</label>
                        <select
                            className="form-control form-control-lg"
                            value="fee"
                            name="fee"
                        >
                            <option> -- select an option -- </option>
                            <option value={200}>Rs: 200 to 300</option>
                            <option value={300}>Rs: 350 to 500</option>
                            <option value={400}>Rs: 550 to 600</option>
                            <option value={500}>Rs: 600 to 700</option>
                            <option value={600}>Rs: 700 to 800</option>
                            <option value={700}>Rs: 820 to 950</option>
                            <option value={800}>Rs: 950 to 1100</option>
                            <option value={900}>Rs: 1100 to 1250</option>
                            <option value={1100}>Rs: 1250 to 1400</option>
                            <option value={1200}>Rs: 1400 to 1500</option>
                            <option value={1300}>Rs: 1500 to 1600</option>
                        </select>
                    </div>
                    {/* <div className="form-group col-6 col-md-3">
                        <label>Filter by Experience</label>
                        <select
                            className="form-control form-control-lg"
                            value=""
                            name="exp"
                        >
                            <option> -- select an option -- </option>
                            <option value={2}>2 years or more</option>
                            <option value={4}>4 years or more</option>
                            <option value={6}>6 years or more</option>
                            <option value={8}>8 years or more</option>
                            <option value={10}>10 years or more</option>
                            <option value={12}>12 years or more</option>
                        </select>
                    </div>
                    <div className="form-group col-6 col-md-3">
                        <label>Filter by Likes</label>
                        <select
                            className="form-control form-control-lg"
                            value=""
                            name="likes"
                        >
                            <option> -- select an option -- </option>
                            <option value={100}>100 likes or more</option>
                            <option value={200}>200 likes or more</option>
                            <option value={300}>300 likes or more</option>
                            <option value={400}>400 likes or more</option>
                            <option value={500}>500 likes or more</option>
                            <option value={600}>600 likes or more</option>
                        </select>
                    </div>
                 */}
                 </div>
                <div className="row">
                    <div className="form-group col-12">
                        <label>Search by name</label>
                        <input
                            type="text"
                            name="name"
                            value={props.name}
                            onChange={props.filter}
                            className="form-control form-control-lg"
                            placeholder="Search for medicines, health products and more"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <button
                        className="btn btn-lg btn-primary mr-3"
                        type="submit"
                    >
                        Apply Filter
                    </button>
                    <button
                        className="btn btn-lg btn-danger"
                        type="button"
                    >
                        Reset All
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Filter