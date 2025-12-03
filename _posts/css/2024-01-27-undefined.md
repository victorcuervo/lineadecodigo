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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QP4H6R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHdyPu05WQ8Em%2BImCW6oQPS1uIMPBIQ6t6YfhkSFtIqcAiEA6MCOJjzVBOFkvN1A9HPqAgaSZqEtSa22GHFfmpXFrCoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDN%2BM90fNUsGUSbfWrCrcA7gTAVvnj%2Fhyf457PEiXSglIV8LxDKJwUyIttIWAKhoiDZjQut0o%2B6Gy47Rv9KTwNCKU08T0ov%2BrZagEVOje1GQ24k0GTDIXdGiqNp6ft80nCXCVwCsOn2dIKiryHaEVicOocBC%2FnsYxBXwZ4TB8xhmtTG4kziUYAZEhAOxw3%2FLsNc7d7Kw%2Bp0s9wnjoN%2B02y6AEKFYjK6AUyE1EWuElEjoLBOT8hM%2B6JXRMtco5FhOzIGMchG2VL%2BC63e1ukhSDa6boSwYRoLjs80%2FtwXxUwmua7Rq5QQp2aZLgiu%2FYyAJIbKzuXeFfCbXlh88O78qlFI2V6juh7XACivCpgL%2BApUd6gsf6ZQPmpUiOc%2FAyohwC9tM%2FiKPTkDrncKu05SlEiwm9I%2BeUwOhKBU50L1ckRhrKPz%2F67W6B1KNvYHKiMb9lurfDWwCsufksPTBYgcLng045pohhuBP31X0eoTZ6adBN20CjPHsRiAvdmNbN%2FkCmOrQAWRflVyBn20emKdYVrvYnInF%2BeTMkIxKvAPAadJ%2BPSiwVIBsUX4NBCVo%2Bcs%2FZJ2rNotHBtFUCLhEzwFqOx87TI%2BNEX%2FgziRN1jVuQ0KDxFe0Gw65rLeqq%2BaEnhTjiU6fgt9V8QeZ1Z5SqMJDNwMkGOqUBT0qzAsE3XvHHaiIqXvJoD4eo%2Bm5oXto0D8fsi%2FxoUHyv0IUcq%2BKVBfIAokFEIs98jw7xDUr7%2Bdgd9ux8MxE78ciKtU%2FU%2BvtS%2FMfJUHQSFB95s3tyupW0b4HQQ2C4FIfcvK7UWp3YKPsu%2BuZ6z5uJ4ZB9A8YdF5zL4tiJiqWO9qEgp1lP60wbaj85QedYO%2B6%2BLI%2B%2Btd1SULs7Ehf3kzCanR%2FR8WYI&X-Amz-Signature=1916c25012e8df15a858cecccbeb8ab7d5161d9c1a1695ac8247fe8a1b25945a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QP4H6R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHdyPu05WQ8Em%2BImCW6oQPS1uIMPBIQ6t6YfhkSFtIqcAiEA6MCOJjzVBOFkvN1A9HPqAgaSZqEtSa22GHFfmpXFrCoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDN%2BM90fNUsGUSbfWrCrcA7gTAVvnj%2Fhyf457PEiXSglIV8LxDKJwUyIttIWAKhoiDZjQut0o%2B6Gy47Rv9KTwNCKU08T0ov%2BrZagEVOje1GQ24k0GTDIXdGiqNp6ft80nCXCVwCsOn2dIKiryHaEVicOocBC%2FnsYxBXwZ4TB8xhmtTG4kziUYAZEhAOxw3%2FLsNc7d7Kw%2Bp0s9wnjoN%2B02y6AEKFYjK6AUyE1EWuElEjoLBOT8hM%2B6JXRMtco5FhOzIGMchG2VL%2BC63e1ukhSDa6boSwYRoLjs80%2FtwXxUwmua7Rq5QQp2aZLgiu%2FYyAJIbKzuXeFfCbXlh88O78qlFI2V6juh7XACivCpgL%2BApUd6gsf6ZQPmpUiOc%2FAyohwC9tM%2FiKPTkDrncKu05SlEiwm9I%2BeUwOhKBU50L1ckRhrKPz%2F67W6B1KNvYHKiMb9lurfDWwCsufksPTBYgcLng045pohhuBP31X0eoTZ6adBN20CjPHsRiAvdmNbN%2FkCmOrQAWRflVyBn20emKdYVrvYnInF%2BeTMkIxKvAPAadJ%2BPSiwVIBsUX4NBCVo%2Bcs%2FZJ2rNotHBtFUCLhEzwFqOx87TI%2BNEX%2FgziRN1jVuQ0KDxFe0Gw65rLeqq%2BaEnhTjiU6fgt9V8QeZ1Z5SqMJDNwMkGOqUBT0qzAsE3XvHHaiIqXvJoD4eo%2Bm5oXto0D8fsi%2FxoUHyv0IUcq%2BKVBfIAokFEIs98jw7xDUr7%2Bdgd9ux8MxE78ciKtU%2FU%2BvtS%2FMfJUHQSFB95s3tyupW0b4HQQ2C4FIfcvK7UWp3YKPsu%2BuZ6z5uJ4ZB9A8YdF5zL4tiJiqWO9qEgp1lP60wbaj85QedYO%2B6%2BLI%2B%2Btd1SULs7Ehf3kzCanR%2FR8WYI&X-Amz-Signature=aa35438f4e1da370b9d0b6796bc1d8a2e8be787cc59f36f79d02b6461c9bba10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

