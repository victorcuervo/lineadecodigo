---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X32PNQAK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCeHCiPYjCCbg2AcOm%2BGh%2BlZxUX52EvG8r0DXDC0T7FAiAhVmg3EX5rSlHrdZ7qo0PHuDGOhyoL2Rum9g8lyO4Z3yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx92NGbQhQD8swU%2FCKtwDXUu0Phh%2BVfQiV%2FitoGsA%2FjIRdAijLwuEAMIz%2BGPnaYAlhCTBAZuCaHYw5T9eFXzlRP14MNlUgpVYG6DHSEqaGjs9LxtjQxZyyW829g9PclknmRGq%2Bi6KSmKPz7ep9us1gkMUq%2BO5K7a0a5o05eM0jpmamj40PzO0QxslP%2BgvkrV%2F2KUHWHd%2F8q8aKVp6m9JElevVt%2FC7YjBhFj3A%2BpnT18TBDKbgGDE2v4BN%2FX2kOfAgrzHE3r9zuCtIcWUzIhcnm%2F5kVTmp0MCecwf5yk56hIeo8K8HQ1%2BwZXYxcnbDk2Vn%2FLb5rLE%2BBDzbjBU8HnlbKHpzTt5PaU8kQlVYNnwEkoL6OG9CSzAX00S68Ypuje%2BuKNhu05OGb02uz11hErvvCiKSTseCNkxN79Ybvmx%2BZGDDBunoPu8GAo684gEflm7nyRzZwlGfWL%2BU%2BgmWr%2BtUBDwUVKN3hPorOLJQabP6PCjgdKwJMd939lzQg2DBfqfRneYmwAtYWdCa23F1UBkJnl0YJU57K2cE7pWWXas2ug6TeAa1ao5pD3ahbtjjj0z6bdb8F%2BXJGtBUHuZdilW%2Fa1Uj8QxJea8Yf3DdH%2Bec8EHP4MRVIJlg64JO0CceMJnh%2FIx4zF4Zi9pYpy8w%2F5PZyQY6pgGuLl57k3bAfSQZudQJ4%2FIKA1EYoErDqKe2hs38%2FT2bHerAuh4GXy0RrNkJy%2FxJeIrmsMsHN25BliFv7Z5yFxGFlEz1LBOXEurrms9joBt5LmQ9oN9Mh2YbW2p1Tk1Psecfyq%2FBX20F400FOeenpglPusrTXMuEdOZ%2F0b4SN%2BrNaleLRl04yuUcM2%2FEu6yVlGkkO4Z%2Bbxv%2Bc2l%2FeUHUZi%2FXq%2BX%2FvBff&X-Amz-Signature=205afff0d7a39bdd90e2ba7b307cfe3242325a79a17f28113cce1fc60f28e839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X32PNQAK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCeHCiPYjCCbg2AcOm%2BGh%2BlZxUX52EvG8r0DXDC0T7FAiAhVmg3EX5rSlHrdZ7qo0PHuDGOhyoL2Rum9g8lyO4Z3yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx92NGbQhQD8swU%2FCKtwDXUu0Phh%2BVfQiV%2FitoGsA%2FjIRdAijLwuEAMIz%2BGPnaYAlhCTBAZuCaHYw5T9eFXzlRP14MNlUgpVYG6DHSEqaGjs9LxtjQxZyyW829g9PclknmRGq%2Bi6KSmKPz7ep9us1gkMUq%2BO5K7a0a5o05eM0jpmamj40PzO0QxslP%2BgvkrV%2F2KUHWHd%2F8q8aKVp6m9JElevVt%2FC7YjBhFj3A%2BpnT18TBDKbgGDE2v4BN%2FX2kOfAgrzHE3r9zuCtIcWUzIhcnm%2F5kVTmp0MCecwf5yk56hIeo8K8HQ1%2BwZXYxcnbDk2Vn%2FLb5rLE%2BBDzbjBU8HnlbKHpzTt5PaU8kQlVYNnwEkoL6OG9CSzAX00S68Ypuje%2BuKNhu05OGb02uz11hErvvCiKSTseCNkxN79Ybvmx%2BZGDDBunoPu8GAo684gEflm7nyRzZwlGfWL%2BU%2BgmWr%2BtUBDwUVKN3hPorOLJQabP6PCjgdKwJMd939lzQg2DBfqfRneYmwAtYWdCa23F1UBkJnl0YJU57K2cE7pWWXas2ug6TeAa1ao5pD3ahbtjjj0z6bdb8F%2BXJGtBUHuZdilW%2Fa1Uj8QxJea8Yf3DdH%2Bec8EHP4MRVIJlg64JO0CceMJnh%2FIx4zF4Zi9pYpy8w%2F5PZyQY6pgGuLl57k3bAfSQZudQJ4%2FIKA1EYoErDqKe2hs38%2FT2bHerAuh4GXy0RrNkJy%2FxJeIrmsMsHN25BliFv7Z5yFxGFlEz1LBOXEurrms9joBt5LmQ9oN9Mh2YbW2p1Tk1Psecfyq%2FBX20F400FOeenpglPusrTXMuEdOZ%2F0b4SN%2BrNaleLRl04yuUcM2%2FEu6yVlGkkO4Z%2Bbxv%2Bc2l%2FeUHUZi%2FXq%2BX%2FvBff&X-Amz-Signature=65d292c225d852323c4c06a24dad15c648b92e092e72a1632cd951e5feaf5343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

