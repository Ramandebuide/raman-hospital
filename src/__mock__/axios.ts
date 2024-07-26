const mockData={
    data:{normalRoom:50,oxygenRoom:50,icuRoom:20},
    message:"fetched successfully"
}
export default{
    get:jest.fn().mockResolvedValue(mockData)
}