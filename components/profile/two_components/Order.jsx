import { Rating } from '@mui/material'
import { Cart,Delete ,List ,Search} from '../../../svg'

export default function Order({handleOpenDrawer}) {
  return (

    <section className='pt-5 pl:2  md:pl-16 md:w-8/12 lg:w-9/12 justify-center flex flex-col md:justify-start w-full'>
         <div className="flex items-center justify-between">
            <h1 className="text-gray-800 text-3xl">Your Orders</h1>
            <button className="btn d-block d-md-none" onClick={handleOpenDrawer}><List width={20} height={20} color={'gray'}/></button>
        </div>
        <div className='flex items-center w-full gap-2 mt-3'>
            <div className="Search w-full md:w-6/12 lg:w-4/12  flex gap-2 px-3 py-1.5 border rounded items-center hover:outline hover:outline-one hover:outline-1">
                <Search width={20} height={20} color="#484848" />
                <input type="text" name="" id="" placeholder="Search..." className="outline-none bg-transparent w-100" />
            </div>
            <span className='text-gray-700 font-semibold text-sm'>5</span>
        </div>
        <div className="order_container mt-3 block">
            <div className='myOrder'>
                <div className='thead flex items-center bg-gray_table px-6 py-3 rounded-top'>
                    <div className='th'>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>Product</p>
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>id</p>
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>price</p>
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>Date</p>
                    </div>
                    <div className='th flex  items-center text-uppercase '>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>Items</p>
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>status</p>
                    </div>
                
                </div>
                <div className='tbody'>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tr flex px-6 py-2'>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center'>
                            <div className='flex gap-3 border-none'>
                                <img src={'./images/T-shirt/nike3.webp'} alt="" width={50} height={50} className='rounded object-contain'/>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold'>Product</h6>
                                    <p className='text-xs text-gray_text_table'>Category</p>
                                </div>
                            </div>
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#123</p>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>1800 DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>27/12/2020</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        <div className='td flex items-center text-capitalize'>
                            <p style={{fontWeight : '500 !important'}} className='mb-0 text-sm text-gray-800'>5</p>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                                <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>Shipping</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
