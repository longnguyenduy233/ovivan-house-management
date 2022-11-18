export const houseModel = [
    {
        id: 1,
        model: 'apartment-001',
        media: {
            title: 'Model media title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iure ducimus fugiat exercitationem temporibus labore beatae veniam? Similique, exercitationem, quo non est expedita quam reiciendis culpa vero deserunt, labore obcaecati.',
            banner: 'https://media.istockphoto.com/id/1346508441/vi/anh/k%E1%BA%BFt-xu%E1%BA%A5t-3d-c%E1%BB%A7a-cyberpunk-ai-b%E1%BA%A3ng-m%E1%BA%A1ch-n%E1%BB%81n-t%E1%BA%A3ng-c%C3%B4ng-ngh%E1%BB%87-kh%C3%A1i-ni%E1%BB%87m-cpu-v%C3%A0-gpu-b%E1%BB%99-x%E1%BB%AD-l%C3%BD-m%C3%A1y.jpg?s=1024x1024&w=is&k=20&c=XdRxjeT5YbBqg5xY_ZUGfBIh4oAv9OLvT9EDwgoOd3s=',
            video: ''
        },
    },
    {
        id: 2,
        model: 'apartment-002',
        media: {
            title: 'Model media title 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iure ducimus fugiat exercitationem temporibus labore beatae veniam? Similique, exercitationem, quo non est expedita quam reiciendis culpa vero deserunt, labore obcaecati.',
            banner: 'https://media.istockphoto.com/id/1346508441/vi/anh/k%E1%BA%BFt-xu%E1%BA%A5t-3d-c%E1%BB%A7a-cyberpunk-ai-b%E1%BA%A3ng-m%E1%BA%A1ch-n%E1%BB%81n-t%E1%BA%A3ng-c%C3%B4ng-ngh%E1%BB%87-kh%C3%A1i-ni%E1%BB%87m-cpu-v%C3%A0-gpu-b%E1%BB%99-x%E1%BB%AD-l%C3%BD-m%C3%A1y.jpg?s=1024x1024&w=is&k=20&c=XdRxjeT5YbBqg5xY_ZUGfBIh4oAv9OLvT9EDwgoOd3s=',
            video: ''
        },
    }
]

export let houses = [
    {
        id: 1,
        houseNumber: 'L-001',
        price: 1000,
        blockNumber: 'A',
        landNumber: '01',
        houseType: 'Apartment',
        model: houseModel[0],
        status: 'available'
    },
    {
        id: 2,
        houseNumber: 'L-002',
        price: 2000,
        blockNumber: 'A',
        landNumber: '01',
        houseType: 'Apartment',
        model: houseModel[0],
        status: 'available'
    },
    {
        id: 3,
        houseNumber: 'L-003',
        price: 3000,
        blockNumber: 'A',
        landNumber: '01',
        houseType: 'Apartment',
        model: houseModel[1],
        status: 'available'
    }
]

export const masterData = {
    houseType: ['Apartment', 'Townhouse', 'Villa'],
    houseModel: houseModel.map(item => item.model),
    status: ['Available', 'Blocked']
}