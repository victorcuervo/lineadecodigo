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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHOQSPME%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDc9I%2F4%2B3Qzz7s%2B1s7ofLG3HECzZSHKCQ%2BrV5c1J9RIcwIgS329qrD8Q6DM%2BMCl%2BcwtIHOcurimV9gYftUETe4Qxcgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNUZO37%2BnQVbSj8t9yrcA3Z%2FaGLgibsjWIaiy1lJF6%2BmxPZ0eQnxWIF%2Bv4%2F4wCNeztEogzEZOseYBHG0umJ%2BlRVwFMUnk%2Ftad%2BSqtHHBmlDeRdyzRdGenr2asoVXRJ9MNuxCS3CAsyzjI1fpn%2BFRfii%2FEMhwkGwz4Um1ImInpwqlahMOjHLuVIZdYvsYk3lZlp2bzu3jwBGY5pRKLpfSKgxHjZkJQo%2BiW2mq8YcDjP%2BmHXTGYpExgWyz9YnwLFaUWXvy2cF19R8g4LhshM01Y5ZsOz7ojo4qD0EdOwAvxEXr85q48XMetcPd4Kg1dlCIHRB%2FZ%2B5mUlWOqtgpLyNUnWMBZS0zSxMR%2Byxisr8YK4JL28ISlSacQRRYP2gGYMgB9Q%2BTXjvjr3RqAB45gl8zXbs4hxCC7%2FS1shy3pth9Zh4YSyIJr85rD%2BM35qZSlHLDT%2FiFk5mrv3ctNzJD9lx7qOr9M2Xhfw%2BmI0xR8q0I1k7x37zkFsTDqIarJeuG%2BeJBl0qTN8Y8wstCEbErGLLrh6a%2BrGhr2DaFfRFx3xgdm3cr3VNx5t%2F5shVUmtkAdDcnqcQKatZivc1XKQv7g6g8LTMvUbqwXBnSOuEkCMnHedfipJFcbGFcFNhEuqzHAq2zQivB1AU5jMrMeIW%2FMKK4v8kGOqUBVuqITZ4xQIwvcvtDe%2Fqw9Z2nYW5H%2FJcztkRh%2FB5DMyWhQoyUEClc3vGuHsMCWEmNzR%2BVFA3mLAs1HEP3Pbzg5xfyfBUOzdxuE2viWDpCQRaULyl23CtSpRNwqdEOrJ92msLGOvyiEcUldkyJ4HFfC4z6V1DU2m8RwbPlI3Dl7SLjR5j%2BdQGEg3vvrpaKMEEe6IQjpAv6fMzs1VH%2Bd2OBf0REGWXB&X-Amz-Signature=5b1278ee4252b14f7c411051a9094a10e8d03748e87f01c1565f97f3de898364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHOQSPME%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDc9I%2F4%2B3Qzz7s%2B1s7ofLG3HECzZSHKCQ%2BrV5c1J9RIcwIgS329qrD8Q6DM%2BMCl%2BcwtIHOcurimV9gYftUETe4Qxcgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNUZO37%2BnQVbSj8t9yrcA3Z%2FaGLgibsjWIaiy1lJF6%2BmxPZ0eQnxWIF%2Bv4%2F4wCNeztEogzEZOseYBHG0umJ%2BlRVwFMUnk%2Ftad%2BSqtHHBmlDeRdyzRdGenr2asoVXRJ9MNuxCS3CAsyzjI1fpn%2BFRfii%2FEMhwkGwz4Um1ImInpwqlahMOjHLuVIZdYvsYk3lZlp2bzu3jwBGY5pRKLpfSKgxHjZkJQo%2BiW2mq8YcDjP%2BmHXTGYpExgWyz9YnwLFaUWXvy2cF19R8g4LhshM01Y5ZsOz7ojo4qD0EdOwAvxEXr85q48XMetcPd4Kg1dlCIHRB%2FZ%2B5mUlWOqtgpLyNUnWMBZS0zSxMR%2Byxisr8YK4JL28ISlSacQRRYP2gGYMgB9Q%2BTXjvjr3RqAB45gl8zXbs4hxCC7%2FS1shy3pth9Zh4YSyIJr85rD%2BM35qZSlHLDT%2FiFk5mrv3ctNzJD9lx7qOr9M2Xhfw%2BmI0xR8q0I1k7x37zkFsTDqIarJeuG%2BeJBl0qTN8Y8wstCEbErGLLrh6a%2BrGhr2DaFfRFx3xgdm3cr3VNx5t%2F5shVUmtkAdDcnqcQKatZivc1XKQv7g6g8LTMvUbqwXBnSOuEkCMnHedfipJFcbGFcFNhEuqzHAq2zQivB1AU5jMrMeIW%2FMKK4v8kGOqUBVuqITZ4xQIwvcvtDe%2Fqw9Z2nYW5H%2FJcztkRh%2FB5DMyWhQoyUEClc3vGuHsMCWEmNzR%2BVFA3mLAs1HEP3Pbzg5xfyfBUOzdxuE2viWDpCQRaULyl23CtSpRNwqdEOrJ92msLGOvyiEcUldkyJ4HFfC4z6V1DU2m8RwbPlI3Dl7SLjR5j%2BdQGEg3vvrpaKMEEe6IQjpAv6fMzs1VH%2Bd2OBf0REGWXB&X-Amz-Signature=46e96cce339ef421b80f195bb8f6e859dafb84bed6360353ab55a94e2dea2202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

