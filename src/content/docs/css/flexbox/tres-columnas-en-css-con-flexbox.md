---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PM4HQE3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChDs1kMN2Xp0lSYQ30gucBAUW6h0AvS12AHNOesAKGegIgIhGNf5FXgqW20ojb%2B0AVsZ4CSYrQdjEdzTfzw%2Bcs%2Bj0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHtf6voRJKFzGGnFCrcAz5CzwAEoOHwi2HYEO%2FlGlDHnT6400S%2BocuUdgilvq5OOxLVPDcFO3lVhQVaWRxi6eNtu31zrFeczYBl0KGbOKm1txQ5%2FbLmlLLDG1wvSh4aIUTslp1ZdXEC5uIdYHasfSdkVTh028MUdBkH8Y8uEJuxgmFWL45RFODnvg2Llzi03oiN6EcFHNHjd7VcSgMB3mnjdwIBuGRc38580ktAEwscud7HLrhbNarnf3k7MNFj6k8bh5fMQZYIgWrnwNtOV%2FQBiPveNDw%2BbmyItx0O8nkSgpjNJGJfaPlKP8y5xtTLr6xx4Gs8IyFQq%2B7XjaxaKZHv7B2Q4S5O0zQqVoHpxcv5hEfy7CRf33OdDRtELWvn00dSDpH8gYQpFv29xrS8SpXT%2BhVquU4CzFzR6x0YicFhjIn1io5zOVmJB3bQ7gRgw0T9FlM%2F7QgKyqRaKceVibDCf48xQ%2FhqWGeFcT2Bh%2FWkGWAaBm4BPH7Aciy%2B8IL0ZxavObiSZDOriLUECffmNiuiCwTBJ%2BtnPtjAsmN8Is5jmdNOh9FkhLj%2FiHemagW2Jif7F6kfJh5cL4klP1vzgMmhBWAWUc5r%2FwEdo4n8g1n4wMcNFveIkXDpz39ERruS6VSZPLkKiaL%2FpdZXMNPk3skGOqUBWd2%2BPOvCSA5F6i6cc0VkhDq%2FhpLvj6ckFk9Ar5LLaW9gkIS6n8nnZ%2FBeZ7czfqkQeKAyKDPLobcYAa1jrTW7zZwoL7BVN%2FT8x1VL7pGPy2aQna90A7FWRNPptX8BpEqPLpbcWegUounGtnhKOg7Qo5kLXYaMOO%2BZwhVzu7GC1mJR4gq3tP%2FFsGz2R2SKTWzOMXC%2Fx59Pmvfr2B0fCK2nBKho7lC8&X-Amz-Signature=a696d55c9904e0f7187937b1860e01cd9294f5cd2c16134fb112fd415ecd59a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PM4HQE3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChDs1kMN2Xp0lSYQ30gucBAUW6h0AvS12AHNOesAKGegIgIhGNf5FXgqW20ojb%2B0AVsZ4CSYrQdjEdzTfzw%2Bcs%2Bj0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHtf6voRJKFzGGnFCrcAz5CzwAEoOHwi2HYEO%2FlGlDHnT6400S%2BocuUdgilvq5OOxLVPDcFO3lVhQVaWRxi6eNtu31zrFeczYBl0KGbOKm1txQ5%2FbLmlLLDG1wvSh4aIUTslp1ZdXEC5uIdYHasfSdkVTh028MUdBkH8Y8uEJuxgmFWL45RFODnvg2Llzi03oiN6EcFHNHjd7VcSgMB3mnjdwIBuGRc38580ktAEwscud7HLrhbNarnf3k7MNFj6k8bh5fMQZYIgWrnwNtOV%2FQBiPveNDw%2BbmyItx0O8nkSgpjNJGJfaPlKP8y5xtTLr6xx4Gs8IyFQq%2B7XjaxaKZHv7B2Q4S5O0zQqVoHpxcv5hEfy7CRf33OdDRtELWvn00dSDpH8gYQpFv29xrS8SpXT%2BhVquU4CzFzR6x0YicFhjIn1io5zOVmJB3bQ7gRgw0T9FlM%2F7QgKyqRaKceVibDCf48xQ%2FhqWGeFcT2Bh%2FWkGWAaBm4BPH7Aciy%2B8IL0ZxavObiSZDOriLUECffmNiuiCwTBJ%2BtnPtjAsmN8Is5jmdNOh9FkhLj%2FiHemagW2Jif7F6kfJh5cL4klP1vzgMmhBWAWUc5r%2FwEdo4n8g1n4wMcNFveIkXDpz39ERruS6VSZPLkKiaL%2FpdZXMNPk3skGOqUBWd2%2BPOvCSA5F6i6cc0VkhDq%2FhpLvj6ckFk9Ar5LLaW9gkIS6n8nnZ%2FBeZ7czfqkQeKAyKDPLobcYAa1jrTW7zZwoL7BVN%2FT8x1VL7pGPy2aQna90A7FWRNPptX8BpEqPLpbcWegUounGtnhKOg7Qo5kLXYaMOO%2BZwhVzu7GC1mJR4gq3tP%2FFsGz2R2SKTWzOMXC%2Fx59Pmvfr2B0fCK2nBKho7lC8&X-Amz-Signature=96e85c7144a95deb05e22620465851d1289d687429e08712fae00f09d0d1beea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

