---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSRCT2Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHk3FOcQ2iy3aE5EnHhlOU2dNz%2BS474DW07yaBoM9m0QIhALufgUgUTlgZvtblc2j1mJtTWfkPr133%2FFPgWqO05042KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe8CDIhMkzt4Rj2aMq3AOZqJ3OVEs%2BErR%2FEOIrs11Upw3uAxIS83aB5VNn0dhhcP8GE6%2BCm3YNaf7xO%2FByxAApnCpnExRAj4s%2B%2BsdlGHXmNj3%2Bhdaa6a7YvVRh7VfTzTwwpwEyeiNKNMWxSXuDRBOMXtuuodFwm1m183B%2F74fnrmh0A%2Bk%2BjvXIkPVekFkCf0ipPAKXfSvrM0YTfI2dNUTvdiy7b%2FSGlS80eimb4yj94TSpHrfSJrniBOIzm8Kw0UMdnr2p3AhJmsNK9qLMnmsGGSHUDSfUhhH2CZ8MEsI0897QftlSF1WXLuk5IUMxHhtDdmw4E5Ii5aBQANxrEXwEAArOIOfOMREL48u6ntJ7onn%2BU02xqi5KmvqW%2FtwauYsMYpQJbZMYrVoxVMMY5rN09vA5z9KMDxOsP9gixt%2FsjpRluIUm%2B3lYys7h6kLyJtp62pL5YmrnNCRRS3QhXBB3xzvo9tBy%2FxeaP9g3FOLpPBiwmZSPrcqUhWPP0MngXsas7ScxECOUo75TbVnlwiTwf7jKj5xJzRuJNkg%2F8NhtzV1fx%2FtVGflWIaIxVUXrP54KJNUiC5nEnWiuvoyXTB8mmpjXx2fiEWHc605AhMY%2Fds5vWWO4v2rePIh0C6TxOzExul8L%2FcQMntsvzTCGvdbJBjqkASDwUGtddpFY3hAbQrBmq9JmVRdDnSDVneoEAmxPvBlhjXKzWLCVsrC5ZPWnctBN2%2Bj9eB9mIhJtEJqdsNpKMKrNf1mXAMcw4nqtOp7lTyjgiYz6gNH42poEzyl2w33JVYygwtsx0OQGC4wQ3fsY2OonHjBJ9ZjCo3346laJm4QTKPwhbsjLw48N7gkSN%2FZbB2Ed23eT5JDy7QE4WZqbtv0WzxSv&X-Amz-Signature=b1c157bc5e72add08da6be9bf5dbd4443975aae9b6fe54bdbbf2eceaf3d24da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSRCT2Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHk3FOcQ2iy3aE5EnHhlOU2dNz%2BS474DW07yaBoM9m0QIhALufgUgUTlgZvtblc2j1mJtTWfkPr133%2FFPgWqO05042KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe8CDIhMkzt4Rj2aMq3AOZqJ3OVEs%2BErR%2FEOIrs11Upw3uAxIS83aB5VNn0dhhcP8GE6%2BCm3YNaf7xO%2FByxAApnCpnExRAj4s%2B%2BsdlGHXmNj3%2Bhdaa6a7YvVRh7VfTzTwwpwEyeiNKNMWxSXuDRBOMXtuuodFwm1m183B%2F74fnrmh0A%2Bk%2BjvXIkPVekFkCf0ipPAKXfSvrM0YTfI2dNUTvdiy7b%2FSGlS80eimb4yj94TSpHrfSJrniBOIzm8Kw0UMdnr2p3AhJmsNK9qLMnmsGGSHUDSfUhhH2CZ8MEsI0897QftlSF1WXLuk5IUMxHhtDdmw4E5Ii5aBQANxrEXwEAArOIOfOMREL48u6ntJ7onn%2BU02xqi5KmvqW%2FtwauYsMYpQJbZMYrVoxVMMY5rN09vA5z9KMDxOsP9gixt%2FsjpRluIUm%2B3lYys7h6kLyJtp62pL5YmrnNCRRS3QhXBB3xzvo9tBy%2FxeaP9g3FOLpPBiwmZSPrcqUhWPP0MngXsas7ScxECOUo75TbVnlwiTwf7jKj5xJzRuJNkg%2F8NhtzV1fx%2FtVGflWIaIxVUXrP54KJNUiC5nEnWiuvoyXTB8mmpjXx2fiEWHc605AhMY%2Fds5vWWO4v2rePIh0C6TxOzExul8L%2FcQMntsvzTCGvdbJBjqkASDwUGtddpFY3hAbQrBmq9JmVRdDnSDVneoEAmxPvBlhjXKzWLCVsrC5ZPWnctBN2%2Bj9eB9mIhJtEJqdsNpKMKrNf1mXAMcw4nqtOp7lTyjgiYz6gNH42poEzyl2w33JVYygwtsx0OQGC4wQ3fsY2OonHjBJ9ZjCo3346laJm4QTKPwhbsjLw48N7gkSN%2FZbB2Ed23eT5JDy7QE4WZqbtv0WzxSv&X-Amz-Signature=8842f4f6f09d126f5c314d1739d23e1fb1c4753a03eff7d6809139e0a8e01ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

