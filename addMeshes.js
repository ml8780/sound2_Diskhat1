import {
	BoxGeometry,
	MeshBasicMaterial,
	MeshStandardMaterial,
	Mesh,
	SphereGeometry,
	CapsuleGeometry,
	RingGeometry,
	MeshPhongMaterial,
	MeshLambertMaterial,
	MeshPhysicalMaterial,
	TextureLoader,
	CylinderGeometry,
	TorusGeometry
} from 'three'

const loader = new TextureLoader()

export const chain = () => {
	const color = loader.load('/textures/Metal_Weave_008_Base_Color.jpg')
	const displace = loader.load('/textures/Metal_Weave_008_Height.png')
	const normal = loader.load('/textures/Metal_Weave_008_Normal.jpg')
	const opacity = loader.load('/textures/Metal_Weave_008_Opacity.jpg')
	const roughness =loader.load('/textures/Metal_Weave_008_Roughness.jpg')
	const metalness =loader.load('/textures/Metal_Weave_008_Metalic.jpg')

	// const chainGeometry = new BoxGeometry( 2, 2, 2 )
	const chainGeometry = new TorusGeometry( 20,10,180,100)
	const chainMaterial = new MeshPhysicalMaterial({
		map:color, 
		displacementMap: displace, 
		normalMap: normal, 
		alphaMap: opacity,
		roughnessMap:roughness,
		metalnessMap:metalness,
		thickness:1.5,
		transparent: true
	})
	const chainMesh = new Mesh(chainGeometry,chainMaterial)
	return chainMesh
}

export const ball = () => {
	const ballGeometry = new SphereGeometry(0.1, 20, 20)
	const ballMaterial = new MeshPhysicalMaterial({
		color: 'white',
		clearcoat:1,
		metalness:0.0,
		roughness: 0.2,
		// wireframe: true
		
	})
	const ballMesh = new Mesh(ballGeometry,ballMaterial)
	return ballMesh
}

export const drum1 = () =>{
	const drum1Geometry = new CylinderGeometry(2, 0.5, 1.5, 250)
	const drum1Material = new MeshStandardMaterial({
		color:0x03ff07, 
		metalness: 0.3, 
		roughness:1,
		wireframe:true
	})
	const drum1Mesh = new Mesh(drum1Geometry,drum1Material)
	drum1Mesh.position.set(0, -2.5, 2)
	
	return drum1Mesh
}

export const drum2 = () =>{
	const drum2Geometry = new CylinderGeometry(3.5, 0.5, 1.5, 80)
	const drum2Material = new MeshStandardMaterial({
		color:0x5531f5, 
		metalness: 0.8, 
		roughness:0.2,
		transparent:true,
		opacity:0.6
		// wireframe:true
	})
	const drum2Mesh = new Mesh(drum2Geometry,drum2Material)
	// drum2Mesh.position.set(3, 2.5, 0)
	drum2Mesh.rotateZ(90)
	
	return drum2Mesh
}

export const drum3 = () =>{
	const drum3Geometry = new CylinderGeometry(2.5, 0.5, 1.5, 80)
	const drum3Material = new MeshStandardMaterial({
		color:0x03ff07, 
		metalness: 0.3, 
		roughness:1,
		wireframe:true
	})
	const drum3Mesh = new Mesh(drum3Geometry,drum3Material)
	// drum3Mesh.position.set(-3, -2.5, 0)
	drum3Mesh.rotateZ(-45)
	
	return drum3Mesh
}