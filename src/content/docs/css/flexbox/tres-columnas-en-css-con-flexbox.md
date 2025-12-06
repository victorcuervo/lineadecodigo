---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FZAYZN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyv2Mernjii11gndDZw5p6qWiWlBN3xOQf72uX0Bok9AIgbORItx4crcUf15nzv60Rc9hJJrimQ%2BCt9cpqm3BSwfcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNb1vpClXxU1GfkuQircA73adH6VJVaP%2BCRcwJhrD6TlCs64Uh%2F0NbqFPkvJhWlpdIKZdDaiegkA0IRQ%2FaUc07YhKtqz522swwD%2F%2BNLso%2BnTl%2Bs5DM0jDIlSZF63557u1rpiTDutgExp48imfo63Eluvka%2BzK9Web%2Fx%2Fxi%2BI%2BwELA4OeAVmr2l4IvxpBqCYRcfyIGQF9Iq9zMM9ejGaaHg8cbxrLl6TWdQSFWkQlTr%2BLypqeTf4bgHE1oQfc3miNEfsercUHz3fjSrEgmnrkYieS5iEeI2dtChrwSw5VSmiAP8WHbXRBkq%2BP6OhyBJqN9eVVdAcAJcmMy9HXC95svgenUE7Ij3GWQ%2FNEe4Px%2FI9AGoyJg%2F5BT%2BIAocWzrCMC6PGoQnd3MSzRYRSmGKDxM5xiQoJq7lDtbsAgF7HYK684iw%2Bu3Mx2FHPmEt0gNTyBTbGS1BYBGPcCrS0EWUmYzLcaU10I%2BG%2FJjJ5Anm0%2BIZa2pUaj3pTSs4QrjnkSkA35pZaoheno53eZA1beL%2F8vKpkewN7WRZxDPTeHGZy1d8bh63gXWOmhIAmDP2sVGmKdRRNZxD6scf2n%2BQ32KzktQjMKrLtKpuBGUBbVM1Ud0ZemxCQGftDX1YNhpsKG0%2Fi0Fs8bgxLf7ZFe3Kq7MJ2m0MkGOqUBddmYHdT9XK7HZpsc3Q3JWO14J1755kaW%2BO8jvHUHp%2F1ZRHX3kjRkIrRJC4p6kAYJ%2F8BW9xLYMIIOIblX7ZcE7LDFi%2BzxtSJSRZl7iSk3qvNg6%2F9ZXUClJAkj3rc00Jkvh%2B3NHqeYu8ZqxOXK01qqIyXqZxsY8LkogGVrSjhb4txiY1Sx43qka1lmLqoofsDa0%2FzFU7EBPBW8CKarBgUqDXjW%2B7Eg&X-Amz-Signature=243d570dd92677dd6370bc6264f86a8090a08732acadb12fb3bf3cf8d5069999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FZAYZN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyv2Mernjii11gndDZw5p6qWiWlBN3xOQf72uX0Bok9AIgbORItx4crcUf15nzv60Rc9hJJrimQ%2BCt9cpqm3BSwfcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNb1vpClXxU1GfkuQircA73adH6VJVaP%2BCRcwJhrD6TlCs64Uh%2F0NbqFPkvJhWlpdIKZdDaiegkA0IRQ%2FaUc07YhKtqz522swwD%2F%2BNLso%2BnTl%2Bs5DM0jDIlSZF63557u1rpiTDutgExp48imfo63Eluvka%2BzK9Web%2Fx%2Fxi%2BI%2BwELA4OeAVmr2l4IvxpBqCYRcfyIGQF9Iq9zMM9ejGaaHg8cbxrLl6TWdQSFWkQlTr%2BLypqeTf4bgHE1oQfc3miNEfsercUHz3fjSrEgmnrkYieS5iEeI2dtChrwSw5VSmiAP8WHbXRBkq%2BP6OhyBJqN9eVVdAcAJcmMy9HXC95svgenUE7Ij3GWQ%2FNEe4Px%2FI9AGoyJg%2F5BT%2BIAocWzrCMC6PGoQnd3MSzRYRSmGKDxM5xiQoJq7lDtbsAgF7HYK684iw%2Bu3Mx2FHPmEt0gNTyBTbGS1BYBGPcCrS0EWUmYzLcaU10I%2BG%2FJjJ5Anm0%2BIZa2pUaj3pTSs4QrjnkSkA35pZaoheno53eZA1beL%2F8vKpkewN7WRZxDPTeHGZy1d8bh63gXWOmhIAmDP2sVGmKdRRNZxD6scf2n%2BQ32KzktQjMKrLtKpuBGUBbVM1Ud0ZemxCQGftDX1YNhpsKG0%2Fi0Fs8bgxLf7ZFe3Kq7MJ2m0MkGOqUBddmYHdT9XK7HZpsc3Q3JWO14J1755kaW%2BO8jvHUHp%2F1ZRHX3kjRkIrRJC4p6kAYJ%2F8BW9xLYMIIOIblX7ZcE7LDFi%2BzxtSJSRZl7iSk3qvNg6%2F9ZXUClJAkj3rc00Jkvh%2B3NHqeYu8ZqxOXK01qqIyXqZxsY8LkogGVrSjhb4txiY1Sx43qka1lmLqoofsDa0%2FzFU7EBPBW8CKarBgUqDXjW%2B7Eg&X-Amz-Signature=95b6f830a866c6ff93d69a6d5553dd9cfe886a88c1259771c40a459a7e9ab551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

