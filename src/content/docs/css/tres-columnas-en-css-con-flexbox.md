---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIFYZPF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICKI6%2F4ZMS%2FcO6XVN0%2FhPnwAqbRsYCGFkoQXTCGrPpC8AiAs0ALPpgbfEpBBnGVowBeZaALvPKW2KaH0C8lr5TzKeCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMrH4A2gZVbGgGehfdKtwDM4WkBIEdsqOvxm8vPzNyLeze6d0Qc5K5cQ5NnAo4h%2BbX7%2BHRs0b7zblEFm3U2LgnJRcNY%2BM6cWeQz9MlQLhT3aMvnOlKCW4Z7%2BalrGLp6AfAOMQluIVtFqsURgsPEOQ%2FRojyQiMTrJLFou6WB7g09T0L2QA3%2B7JWiP5r9ctlxbVJy0TJkYVEgipe2fYZC3J2vg2yAKwBvbENN0U69FvB7uS7gb%2B1ZD8yqOKwWTesRRXBPTor1ACWcsMT%2BhA5x069ur9PyVK8nW5v0JGiHSuAItKGqDYXf%2BnYZakJEXjp49e4zqAJwBUDJ23I6V1B9oNKbMkaCAInCPDszo3WhCsmLKS2ufZI%2BRm3zmaE5%2BvvczZJxtbNflFAwsZyMqepaoHs8WMVpGr1MQh4pWmHykVEmmxC3FSfJyI8QbCNiz2c1bzQ1ww2H2BDIXWHoQ2AHvGyvC4cYyORcfEml%2Bc%2BGHUALz5MW4bmT6I8%2B1avKDlwhBJODu%2BKw%2BgNiBKQi1Ma95igT0sSBRENGpedIRRziM69xRd0nLwL5ZtyNhleJAxW%2F7JXTMdQCth4UF4Oa1MfEdcvyslkoTnw2XDx1lRaG%2FqlOKhUeuUBmDZvVSwHc0TmvR5ppwSJZiSrck%2Bbv2gwgfjCyQY6pgE0Fe3ojiB4oqcd8AH63n%2FYyAmSzLpoQxIYn9qf65RTAEgfSJ2y8oywNBeZmaaHLK2qsyqFVkmGdAP%2B1YMw%2FeJBo2yXBfDKjLhIsuEhS74OP61jG03GYkmFnUI%2FNJdTDIux3XIsqY7iYcfebjqj5gg1yQ7LJ7ndvxMRH575AQd2HGb73RDV19F%2BGP8td%2F1ZzlOgtlaTCphmvqgOoDeZivsifEqUs4Eb&X-Amz-Signature=104415e238336b47e34b63bddabe696161f311f333756c6832372cbea6baff9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIFYZPF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICKI6%2F4ZMS%2FcO6XVN0%2FhPnwAqbRsYCGFkoQXTCGrPpC8AiAs0ALPpgbfEpBBnGVowBeZaALvPKW2KaH0C8lr5TzKeCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMrH4A2gZVbGgGehfdKtwDM4WkBIEdsqOvxm8vPzNyLeze6d0Qc5K5cQ5NnAo4h%2BbX7%2BHRs0b7zblEFm3U2LgnJRcNY%2BM6cWeQz9MlQLhT3aMvnOlKCW4Z7%2BalrGLp6AfAOMQluIVtFqsURgsPEOQ%2FRojyQiMTrJLFou6WB7g09T0L2QA3%2B7JWiP5r9ctlxbVJy0TJkYVEgipe2fYZC3J2vg2yAKwBvbENN0U69FvB7uS7gb%2B1ZD8yqOKwWTesRRXBPTor1ACWcsMT%2BhA5x069ur9PyVK8nW5v0JGiHSuAItKGqDYXf%2BnYZakJEXjp49e4zqAJwBUDJ23I6V1B9oNKbMkaCAInCPDszo3WhCsmLKS2ufZI%2BRm3zmaE5%2BvvczZJxtbNflFAwsZyMqepaoHs8WMVpGr1MQh4pWmHykVEmmxC3FSfJyI8QbCNiz2c1bzQ1ww2H2BDIXWHoQ2AHvGyvC4cYyORcfEml%2Bc%2BGHUALz5MW4bmT6I8%2B1avKDlwhBJODu%2BKw%2BgNiBKQi1Ma95igT0sSBRENGpedIRRziM69xRd0nLwL5ZtyNhleJAxW%2F7JXTMdQCth4UF4Oa1MfEdcvyslkoTnw2XDx1lRaG%2FqlOKhUeuUBmDZvVSwHc0TmvR5ppwSJZiSrck%2Bbv2gwgfjCyQY6pgE0Fe3ojiB4oqcd8AH63n%2FYyAmSzLpoQxIYn9qf65RTAEgfSJ2y8oywNBeZmaaHLK2qsyqFVkmGdAP%2B1YMw%2FeJBo2yXBfDKjLhIsuEhS74OP61jG03GYkmFnUI%2FNJdTDIux3XIsqY7iYcfebjqj5gg1yQ7LJ7ndvxMRH575AQd2HGb73RDV19F%2BGP8td%2F1ZzlOgtlaTCphmvqgOoDeZivsifEqUs4Eb&X-Amz-Signature=5ff9f9305e35e75a73244140ec3e6a52a31ee62c2712342059e447d23f59ce39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

