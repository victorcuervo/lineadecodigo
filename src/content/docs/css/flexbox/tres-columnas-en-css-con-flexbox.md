---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUMKDRF7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC6bhyikkNmJOdqC99wvVd9Hao8YYmjdUrMMv13h%2BjC9gIgSu1YrSSGMCLoMCpkaoQ8FZeOITF56Yeu1nPCFookn1gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCVV9Rd3KwLdimaHTSrcA4qEyiNmTgI0a3RHz%2FCql6OBsZwZChG92R11f%2FRiee5Ctg2je%2BtvOetyUqhBKdP2GW%2BDXpmxqhgWWeWedxsgD4qI9zRANB904TlH8Mc8cjm9h8F3aWQbCvq9x0jGr9OU%2BjpG4ps4alip5k38RJppa5DGIAlVF6K683KtPwPCdioNkDdvFbkhT3kjJ%2FmFynCSW9IRtHXaOKBx3U43sQvEUuVfzAPzmLJzEtkg1VhzbKxZ4gjTpI%2BhVNPxti7ZILZLU65xBme%2BqUFZp%2FTtMtIkQRUikVUYk8X1g5XBzGgm%2FTaB5I%2FYZVRr%2BMkOcEjMC7SGsMvGXmPjz2f6E6P3ZGIy%2FRhM1FmSkALE9hMM2kLi0tukQ8luUlAr5XDVvKq27Qgh4Y3JkzOf28rdinNnisr8RWwDUNmV%2FN2E3FusLTfU9xtA5QSsCtHkOgJatnuTonhJ1LFvaiPGs9on8RFysBitMM7L8M%2B0AqKFIPUqyfUM1GrrTPaMCu0J9d4VTmEps78BgNBXNVtTwpZfQacJBzz%2Fyt95Ju4LxDv5%2BsAgE5WP6H9V%2BubAVKGlzIfGuR%2FAuDkyo4NAruvCWh5JqQc%2B7LsH3cPP7GeP3kBq8pFhnVwgN8IBrcik7mnL6GwOr9tDMNzoxMkGOqUBR2%2FYmyqOb4Pqh4fgVipUBfsEApOOQqIl%2F%2BB0wwmoMUNrlo3l%2FdFcd%2BYoLcTdV8fNEnQuaXjYxxmjKSrYXDwHi8cT97Zx6dBaGcgEPsrlrqeUxLTJnabkceuZye9sIt94D3Km72ejQ%2FujVIGaffwy6wMGvvUZiKzIl5dxywiGFIF24ItD8Gm4OHty0%2FrDdFEvimsykay4xEHpD4GMS0KwW2oe2A1r&X-Amz-Signature=60645c6a95fca634e61621a01c2e20b8b97fc9a2305c267620a97737af711bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUMKDRF7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC6bhyikkNmJOdqC99wvVd9Hao8YYmjdUrMMv13h%2BjC9gIgSu1YrSSGMCLoMCpkaoQ8FZeOITF56Yeu1nPCFookn1gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCVV9Rd3KwLdimaHTSrcA4qEyiNmTgI0a3RHz%2FCql6OBsZwZChG92R11f%2FRiee5Ctg2je%2BtvOetyUqhBKdP2GW%2BDXpmxqhgWWeWedxsgD4qI9zRANB904TlH8Mc8cjm9h8F3aWQbCvq9x0jGr9OU%2BjpG4ps4alip5k38RJppa5DGIAlVF6K683KtPwPCdioNkDdvFbkhT3kjJ%2FmFynCSW9IRtHXaOKBx3U43sQvEUuVfzAPzmLJzEtkg1VhzbKxZ4gjTpI%2BhVNPxti7ZILZLU65xBme%2BqUFZp%2FTtMtIkQRUikVUYk8X1g5XBzGgm%2FTaB5I%2FYZVRr%2BMkOcEjMC7SGsMvGXmPjz2f6E6P3ZGIy%2FRhM1FmSkALE9hMM2kLi0tukQ8luUlAr5XDVvKq27Qgh4Y3JkzOf28rdinNnisr8RWwDUNmV%2FN2E3FusLTfU9xtA5QSsCtHkOgJatnuTonhJ1LFvaiPGs9on8RFysBitMM7L8M%2B0AqKFIPUqyfUM1GrrTPaMCu0J9d4VTmEps78BgNBXNVtTwpZfQacJBzz%2Fyt95Ju4LxDv5%2BsAgE5WP6H9V%2BubAVKGlzIfGuR%2FAuDkyo4NAruvCWh5JqQc%2B7LsH3cPP7GeP3kBq8pFhnVwgN8IBrcik7mnL6GwOr9tDMNzoxMkGOqUBR2%2FYmyqOb4Pqh4fgVipUBfsEApOOQqIl%2F%2BB0wwmoMUNrlo3l%2FdFcd%2BYoLcTdV8fNEnQuaXjYxxmjKSrYXDwHi8cT97Zx6dBaGcgEPsrlrqeUxLTJnabkceuZye9sIt94D3Km72ejQ%2FujVIGaffwy6wMGvvUZiKzIl5dxywiGFIF24ItD8Gm4OHty0%2FrDdFEvimsykay4xEHpD4GMS0KwW2oe2A1r&X-Amz-Signature=862a2233fc0c5f90173eee24b81b0df95f328a34024b87778212651b3267095c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

