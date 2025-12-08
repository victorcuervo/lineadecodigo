---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAOQC5PO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcizDoghhwcoTm50CaNpmDS8GEPRCLvkXX3CIVG92MaAiAFP%2FtXYboEUJb0P9AbOLQ0nK7o3lJ5W6yaT1VvleITFSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2Fb9nZFu9Ftop8D6KtwDMp36Nx7Bp0LxbuxEzqjn%2F9Cvp%2FYgr7UerHs3SMhM2n73LU9SfYtJYIOOLoSa916M%2BIpeSsz6Y4%2Bzjkmwu1G7s1uo7y9NOt78zzO3oIKXJF%2FkXx2mT6gq8N3e9%2FKQu2%2BAWnpddYD2Aw5vJPalgz1uh4pCn0DD3FqPwIdUS3raNWT6IOvqcAX%2F22uEJ81eKh3P7neLO47%2FMJD0KouM64ibR1Ihy7k949bJkJqDtTg9LVafSg52vK4cBTAa3mcld2rceKguIthL3%2Bxqbj2SAZeCIcVReDSD26MxPekKpTQHA8yZ1vLIM1O9ictSev16e%2FsHNaLfTW5UCB8RwU%2By2pi5xGupKwL4wYreA%2Bwnll8%2BLvikvMpl0Q3Z29lMobpwEGEe5kyDys1vP0rDaqR%2BsNiihlBPlUj5tZzXZ14qXdikYtQj9V3Y9FidyerKczgwExB4iUS3FuJy1vJr%2FUzUY%2Bhrm%2FSf04XXDEeelYDizeAtWfEAolcVbdHZqhwX9jkzIabnKsQj8uh45k4YbIS1EhlHJ%2FJlOzTK56pWJVuGUeFm8Xv%2BJSUwCNsAumPVz9UgDhp6BQ77pFirWK7c9kD0yhsTqFTBFHnMolwBRKm61sQqNdaLx92ore6n%2B6b052gwr7TcyQY6pgFTouTE9TJglgcK47kTx7mbp2FcKcm3KuV%2FUG9xLY%2BSyBHNS3aKgzHnOjMI5DyqiPY0hEfOx9vMIaLRqS341yC5%2BMFJR3zjdzCRC5yyLDP7%2Fxt5%2BAdPa6FVodMLL3jONvUdrTbIW8BY4%2Bil6nkfgxbjIV8p3%2B1j7yjedm2WkQJ7Irk4ONKKBi%2BTcUEJ14OIuYzlI8YjrQengDDYU5wd6ZsIAM4ZC74c&X-Amz-Signature=751e0c916e8e27f4ceabe1f483d0a05abe1eae9090d423451a9f48c6b205ad9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAOQC5PO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcizDoghhwcoTm50CaNpmDS8GEPRCLvkXX3CIVG92MaAiAFP%2FtXYboEUJb0P9AbOLQ0nK7o3lJ5W6yaT1VvleITFSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2Fb9nZFu9Ftop8D6KtwDMp36Nx7Bp0LxbuxEzqjn%2F9Cvp%2FYgr7UerHs3SMhM2n73LU9SfYtJYIOOLoSa916M%2BIpeSsz6Y4%2Bzjkmwu1G7s1uo7y9NOt78zzO3oIKXJF%2FkXx2mT6gq8N3e9%2FKQu2%2BAWnpddYD2Aw5vJPalgz1uh4pCn0DD3FqPwIdUS3raNWT6IOvqcAX%2F22uEJ81eKh3P7neLO47%2FMJD0KouM64ibR1Ihy7k949bJkJqDtTg9LVafSg52vK4cBTAa3mcld2rceKguIthL3%2Bxqbj2SAZeCIcVReDSD26MxPekKpTQHA8yZ1vLIM1O9ictSev16e%2FsHNaLfTW5UCB8RwU%2By2pi5xGupKwL4wYreA%2Bwnll8%2BLvikvMpl0Q3Z29lMobpwEGEe5kyDys1vP0rDaqR%2BsNiihlBPlUj5tZzXZ14qXdikYtQj9V3Y9FidyerKczgwExB4iUS3FuJy1vJr%2FUzUY%2Bhrm%2FSf04XXDEeelYDizeAtWfEAolcVbdHZqhwX9jkzIabnKsQj8uh45k4YbIS1EhlHJ%2FJlOzTK56pWJVuGUeFm8Xv%2BJSUwCNsAumPVz9UgDhp6BQ77pFirWK7c9kD0yhsTqFTBFHnMolwBRKm61sQqNdaLx92ore6n%2B6b052gwr7TcyQY6pgFTouTE9TJglgcK47kTx7mbp2FcKcm3KuV%2FUG9xLY%2BSyBHNS3aKgzHnOjMI5DyqiPY0hEfOx9vMIaLRqS341yC5%2BMFJR3zjdzCRC5yyLDP7%2Fxt5%2BAdPa6FVodMLL3jONvUdrTbIW8BY4%2Bil6nkfgxbjIV8p3%2B1j7yjedm2WkQJ7Irk4ONKKBi%2BTcUEJ14OIuYzlI8YjrQengDDYU5wd6ZsIAM4ZC74c&X-Amz-Signature=635008d2d43e6af8408ed4ecac99c3b1c182907d91fea2538489f1ff9e0a595d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

