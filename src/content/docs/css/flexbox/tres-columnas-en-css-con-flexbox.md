---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SNEC5I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFriaZkNjBTpEEmuHJe48yQbB%2F2R0gfiqpp%2Bq5xCziZCAiBsBQoqEgrEgEfY7rO0eMZl9ISoLmxGiM9PFW9MKOnnTir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMBiN%2FGfshsxeqxHU1KtwD0pVHMKq4b0LyrdG9LFvM%2F8Mom4KCYbBi6Z8KImL%2FA3NOQYaGwmRVfAIw6JeffLzBk51ekiQhR7kSWGdqNbVsVIIRWzu18Twt9kZphOUcacFL6nsA4nXfu17uNEl4cXPkpGiO%2BJjvGTNos2XpsGJN07s%2BaXyZRMDZon4HGSEGioTiuaMZuINC39P4t55bV1G9L9M1Mua2sjfwiqujoLkyBNZzPHUzdUtG5J1yj8xQpLAS0oA9ctUgsr4nwY%2FWM4CKRhp%2BvQ8laSu81e9WKIY4UiOiATRp3guvPokBu0gCJTUYyViEOMaORdXcO5mcEPJxp%2B78ZPsR68ZVTpIEsW0txyesS%2BkzGKItx%2Fu%2FSVsJXA5AzMeCjOzD8wVzdO%2BYADhTqwY5mfIEV5csI4GMuDgcjJmKTanB7vmqI29yirm%2FkqHAKaZxzcnI%2F5nYzUpkyBtCnqK2c5utunqfgDGVrKhzpYOCcaDwBUzr5%2Bqo2JGD5oe3jF1cV6oBbf%2Fr6ULZtC4CFZ1KFp4xYnv7fdWNF4YARyd68Tp%2BYfAxiSIbSDmgBafNr%2BAdloRbDiYeWVJMFWKAx2n80uwJuV%2BgctWpwIqwO03%2FeLvrfoTF7Dd8QHhe5pjUlfv1P84mppWrFqcw9fPDyQY6pgFX7pmbX7RD314rCptA155uRYAE5JCRNimqPBn6Cgw3KnSssAYwMYzo0PzsQTkOnTt06sKwGkt7YkYS49tOnBrKo4epzUUcitTOx7r8i%2BbcZ3SV75%2F8qG7Y37%2BgfAgk5zLPlTsDVTbP1Dd%2FU7RjpSfdJk3IwiSSXShKn4z5vB2gQs7fxCofITgPJG0mMzmGyGMYsDFN8Oe6jhpymnNBRTE9utYnSAAY&X-Amz-Signature=fe467558692e44a075295ace119933bc87aced217aa06343bba3867cdfcdb2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SNEC5I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFriaZkNjBTpEEmuHJe48yQbB%2F2R0gfiqpp%2Bq5xCziZCAiBsBQoqEgrEgEfY7rO0eMZl9ISoLmxGiM9PFW9MKOnnTir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMBiN%2FGfshsxeqxHU1KtwD0pVHMKq4b0LyrdG9LFvM%2F8Mom4KCYbBi6Z8KImL%2FA3NOQYaGwmRVfAIw6JeffLzBk51ekiQhR7kSWGdqNbVsVIIRWzu18Twt9kZphOUcacFL6nsA4nXfu17uNEl4cXPkpGiO%2BJjvGTNos2XpsGJN07s%2BaXyZRMDZon4HGSEGioTiuaMZuINC39P4t55bV1G9L9M1Mua2sjfwiqujoLkyBNZzPHUzdUtG5J1yj8xQpLAS0oA9ctUgsr4nwY%2FWM4CKRhp%2BvQ8laSu81e9WKIY4UiOiATRp3guvPokBu0gCJTUYyViEOMaORdXcO5mcEPJxp%2B78ZPsR68ZVTpIEsW0txyesS%2BkzGKItx%2Fu%2FSVsJXA5AzMeCjOzD8wVzdO%2BYADhTqwY5mfIEV5csI4GMuDgcjJmKTanB7vmqI29yirm%2FkqHAKaZxzcnI%2F5nYzUpkyBtCnqK2c5utunqfgDGVrKhzpYOCcaDwBUzr5%2Bqo2JGD5oe3jF1cV6oBbf%2Fr6ULZtC4CFZ1KFp4xYnv7fdWNF4YARyd68Tp%2BYfAxiSIbSDmgBafNr%2BAdloRbDiYeWVJMFWKAx2n80uwJuV%2BgctWpwIqwO03%2FeLvrfoTF7Dd8QHhe5pjUlfv1P84mppWrFqcw9fPDyQY6pgFX7pmbX7RD314rCptA155uRYAE5JCRNimqPBn6Cgw3KnSssAYwMYzo0PzsQTkOnTt06sKwGkt7YkYS49tOnBrKo4epzUUcitTOx7r8i%2BbcZ3SV75%2F8qG7Y37%2BgfAgk5zLPlTsDVTbP1Dd%2FU7RjpSfdJk3IwiSSXShKn4z5vB2gQs7fxCofITgPJG0mMzmGyGMYsDFN8Oe6jhpymnNBRTE9utYnSAAY&X-Amz-Signature=21b5c6321a850ee7c8399cba6d83c40e35ee47cbeb15d4453f564a3e61a54f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

