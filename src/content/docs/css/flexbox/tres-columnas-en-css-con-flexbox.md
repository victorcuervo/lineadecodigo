---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZQ7NHG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvir%2BFrZ1r0UtHUHHoh9hyL8xUc8YisZs9G0eFbmlT8AiB3JG%2BpFJtQYGtkYCOpv03cMudLI9IlgMJ1KZJirysr8yr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMLX7vN34U5AuGHAQbKtwDYsGR1ux8uaYxBL2PxwHR1GdDnVih4cgCjEeEokU4ZALO9JXehz%2FB6N%2FH%2Fzm7kj0TMC8fWCDq0xKmTgixfZ34jsDwQ6nBSWCj6SlamlJNRV2H58F49wb%2Foyk%2B7auu6p4K9h270YX%2BtfFh81p0Ir3WxNoaCtPxGBM7YjAEZewv%2Bgsm0QOsp1AG0VorYTjQJA%2BvCErrNxsM2vhMN1MYGBwT5cRdnkwnWjtx4RyrzsYi6keZoScO4kMuRU9fZSCcHPtTlQ4T9PTdKKRPOXHA3sWtbxFXLFM5wQTBkq2QigLN1%2BpcCvem9pHyGV1Nj%2BnMawvNj7yz8dbBKL1VewNB%2BlMuVxWq%2Fi%2BaZ9mWb0%2Bwko8HksoFPpA8ZujGsD%2FdXGFCbGezwHU%2Fr8HblJVRbQut3Zq30P9CxLGX5Hi220Twv8oUllqev3tvSJWUzjiav6vui%2BOzFwRvIb4ZoNdlq5vEGDV3gKJoIDU21wqEXkypjjq2Lz8%2FiIzOzWsVMXFPbBX0qXUiytDXmcM2H5lChPzhiJTfGAwIPXylta%2BXGCsJbyEiHgSVxVDQ4XWbIGI5VCqqFOdDuxFbGypbRpP%2F7pEkU9nzIjNcAW6HeKe9d5wZIMnNbKsCbrwt%2FsECXjcgGCIw1N7OyQY6pgH4SoNUMp%2FDqn6wCYYhsl1cl%2B1RkNVQzK554881vJm53WtmgjKuK8lXbrwsyCyUMRnnNJqhSKiJrn9lmZWgpbmcFs5Blr7iUaaZ2obrGbqgkYZOrP7vhVI2O0UlXDrcT075Cd8cNY8SoL10SQTCSbCIlGqTV5K72BJzbym1EBlZcgUIW0qV3BGANF%2FntDRwA72IIs6GA3EZodGQ2TDgNAZyqqv6NF3O&X-Amz-Signature=5936d133db1670998f7323abfd17071f5fd1a12b853e147327e0d5f65d46d7e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZQ7NHG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvir%2BFrZ1r0UtHUHHoh9hyL8xUc8YisZs9G0eFbmlT8AiB3JG%2BpFJtQYGtkYCOpv03cMudLI9IlgMJ1KZJirysr8yr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMLX7vN34U5AuGHAQbKtwDYsGR1ux8uaYxBL2PxwHR1GdDnVih4cgCjEeEokU4ZALO9JXehz%2FB6N%2FH%2Fzm7kj0TMC8fWCDq0xKmTgixfZ34jsDwQ6nBSWCj6SlamlJNRV2H58F49wb%2Foyk%2B7auu6p4K9h270YX%2BtfFh81p0Ir3WxNoaCtPxGBM7YjAEZewv%2Bgsm0QOsp1AG0VorYTjQJA%2BvCErrNxsM2vhMN1MYGBwT5cRdnkwnWjtx4RyrzsYi6keZoScO4kMuRU9fZSCcHPtTlQ4T9PTdKKRPOXHA3sWtbxFXLFM5wQTBkq2QigLN1%2BpcCvem9pHyGV1Nj%2BnMawvNj7yz8dbBKL1VewNB%2BlMuVxWq%2Fi%2BaZ9mWb0%2Bwko8HksoFPpA8ZujGsD%2FdXGFCbGezwHU%2Fr8HblJVRbQut3Zq30P9CxLGX5Hi220Twv8oUllqev3tvSJWUzjiav6vui%2BOzFwRvIb4ZoNdlq5vEGDV3gKJoIDU21wqEXkypjjq2Lz8%2FiIzOzWsVMXFPbBX0qXUiytDXmcM2H5lChPzhiJTfGAwIPXylta%2BXGCsJbyEiHgSVxVDQ4XWbIGI5VCqqFOdDuxFbGypbRpP%2F7pEkU9nzIjNcAW6HeKe9d5wZIMnNbKsCbrwt%2FsECXjcgGCIw1N7OyQY6pgH4SoNUMp%2FDqn6wCYYhsl1cl%2B1RkNVQzK554881vJm53WtmgjKuK8lXbrwsyCyUMRnnNJqhSKiJrn9lmZWgpbmcFs5Blr7iUaaZ2obrGbqgkYZOrP7vhVI2O0UlXDrcT075Cd8cNY8SoL10SQTCSbCIlGqTV5K72BJzbym1EBlZcgUIW0qV3BGANF%2FntDRwA72IIs6GA3EZodGQ2TDgNAZyqqv6NF3O&X-Amz-Signature=e2384aedfb8cd65ecece38b6daac55d5e3c978aef9cae608507f6aef21aec2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

