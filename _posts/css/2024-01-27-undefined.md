---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGTTTR3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHt1HDVpeC49QLM%2FxDyCDmw%2Bk8WJKwwhFOmiSjtbZPtjAiBlOK5QJYxNgPACJH8%2BGkUqXDcMXUCxxebWCiVpR0K6Cir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMz034I4wUUG8a2heYKtwD%2ByrbU8iHNZjCMQyybF89ZniK3b24LWmApE7RjUjc6vgfrVo9lic95fVVT8vx81WuyWOhwimrysm8fVO9Jrff91YoErh8unqltLwfzCCNVwzuZY8nr02B5BDqd4q8SrKxa%2Bm0r42wF%2ByEZndQMSQuIyBnDbJBXeOLYCQhs7tb2DNtdJxzg%2Bj%2B5JAxPPHhjZqgYonw4RoTthRyZw5%2Fj7kFm4W2hgQJfNTrJnvfWmwm%2F%2FKAFtts7TnyahrIb6Y2hK6T80iIi6L2lrY1%2FDrrd%2B7CCvQ3Of5Xz%2F0nIPmj88aAGqc3%2FbgRlg6Uz6DNlFU%2BnwrvwxI8iHIXb1Q8MxoXHOTWTMZOXJC%2BFLFI2N32hSG4WhaYanqgetPxySpFvSQqodi9qkGP1yaw7As9FWwPhAZdpJ9Uz9yHHhqKpzaDd3O7mi5bkbsjV2w3sria7orbMjbHZR2t%2BC1fhfDMS%2BH9bRnCg235vTycLYPLupUUHCj6DO7ViRJqdj3Mpcj4WAIiKQgay1G37JA%2BKsGSc4WL6ZZcRy%2BTpVTu%2FI9HTLLuH5shcLTff35LJSAgSpDgT%2B9vWMmOxFTw3HV9dWYrKfTUAuWQwgBgffrv8LVDcog7EWJ84uk5Q40iVrTKsfxsTe0w69W%2FyQY6pgEMkn3pc49pxKNVuzl8ATfFQmqui3jXIUpEewN6H5gN2G75VSx9f2QE28oBYaPHl0TgALIjWCe8hltuwX2dFj7wcsIQYxYF05DLmck09gUbzABhmqCSiA0DRbjLVbpnFsuxBaRGTTZKOZOErIpHLiat042OVAGYO9mDEQJQhKXdkaLgyWQ6OkcSeG5VMKpHKniwR4lu15ngQphqFwkt7odaqmKrc47A&X-Amz-Signature=cc335ecd48c88d2755f2231806bb00f98c52866a25509a360a1f24f9475c1eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGTTTR3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHt1HDVpeC49QLM%2FxDyCDmw%2Bk8WJKwwhFOmiSjtbZPtjAiBlOK5QJYxNgPACJH8%2BGkUqXDcMXUCxxebWCiVpR0K6Cir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMz034I4wUUG8a2heYKtwD%2ByrbU8iHNZjCMQyybF89ZniK3b24LWmApE7RjUjc6vgfrVo9lic95fVVT8vx81WuyWOhwimrysm8fVO9Jrff91YoErh8unqltLwfzCCNVwzuZY8nr02B5BDqd4q8SrKxa%2Bm0r42wF%2ByEZndQMSQuIyBnDbJBXeOLYCQhs7tb2DNtdJxzg%2Bj%2B5JAxPPHhjZqgYonw4RoTthRyZw5%2Fj7kFm4W2hgQJfNTrJnvfWmwm%2F%2FKAFtts7TnyahrIb6Y2hK6T80iIi6L2lrY1%2FDrrd%2B7CCvQ3Of5Xz%2F0nIPmj88aAGqc3%2FbgRlg6Uz6DNlFU%2BnwrvwxI8iHIXb1Q8MxoXHOTWTMZOXJC%2BFLFI2N32hSG4WhaYanqgetPxySpFvSQqodi9qkGP1yaw7As9FWwPhAZdpJ9Uz9yHHhqKpzaDd3O7mi5bkbsjV2w3sria7orbMjbHZR2t%2BC1fhfDMS%2BH9bRnCg235vTycLYPLupUUHCj6DO7ViRJqdj3Mpcj4WAIiKQgay1G37JA%2BKsGSc4WL6ZZcRy%2BTpVTu%2FI9HTLLuH5shcLTff35LJSAgSpDgT%2B9vWMmOxFTw3HV9dWYrKfTUAuWQwgBgffrv8LVDcog7EWJ84uk5Q40iVrTKsfxsTe0w69W%2FyQY6pgEMkn3pc49pxKNVuzl8ATfFQmqui3jXIUpEewN6H5gN2G75VSx9f2QE28oBYaPHl0TgALIjWCe8hltuwX2dFj7wcsIQYxYF05DLmck09gUbzABhmqCSiA0DRbjLVbpnFsuxBaRGTTZKOZOErIpHLiat042OVAGYO9mDEQJQhKXdkaLgyWQ6OkcSeG5VMKpHKniwR4lu15ngQphqFwkt7odaqmKrc47A&X-Amz-Signature=fd9048256318dd7d2ba1fb781c645ea25a90d5eae3ef08242c01cbb038b3bd45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

