import React, { Component } from 'react'
import Table from '../../../misc/table/Table'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteProduct } from '../../../../actions/productsActions'




class ProductTable extends Component {


    editHandler = () => {

    }

    deleteHandler = (productId) => {
        // this.props.deleteProduct(productId)
        console.log(productId)
    }


    render() {

        const { products } = this.props;
        console.log(products)
        const tableheads = ['name', 'sku', 'price', 'promoprice', 'stocks', 'likes', 'createdAt']
        let rows;
        if (products) {

            rows = products.map((product) => {

                let formattedDate = moment(product.createdAt).format('YYYY-MM-DD')

                return {

                    name: product.name,
                    sku: product.sku,
                    price: product.price.normal,
                    promoprice: product.price.promo,
                    stocks: product.stocks,
                    likes: product.likes,
                    createdAt: formattedDate,
                    _id: product._id
                }
            })

            console.log(rows)
        }


        return (
            <div>

                <Table
                    tableheads={tableheads}
                    rows={rows}
                    editHandler={this.editHandler}
                    deleteHandler={this.deleteHandler}


                />






            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    products: state.products.productsTable
})

const mapDispatchToProps = {
    deleteProduct
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductTable)