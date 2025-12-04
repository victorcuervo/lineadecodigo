---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUERRQ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFAY22BVAQhVaKRseLGd5QvYmj%2FV5da4hVlRpRjSt90HAiAJMrQBc2AsP%2FhLOsvkcOof0l%2BuiWZhp1nzgKu9ieWHNCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMkWb%2B5LB3%2FNuWWHLNKtwD1ZjgzjwaTbRpLuwr340q0ircI3EtVV7URThztFAQehsOhQJRSOyzSD73I04%2BfV%2B%2B956A1gY1jZKsp2VW4d7Do6e4yVEWNTBvw6lxnTN7x6ej6WhX0sUeb6FbKP53w5UxhPhVtTtsUNfuUDK%2BH0TlSFRaeoXwgPZ59LOwTW7mP%2BYkFBNLyE0d9YGpJCz5SDLJUMu2o12z1N%2BOIccCW%2FElceg08NGkFTpWhhK7b8gaKQ020R0c78E6CA2YCWDQKIh9iAINsiQdznpDev8qdb4XpnyhYA4OwM3x9j97wEwX2O5Vuk8QWPv9a2qiGCLIz05hMTq39kFQfQNuJcPy%2B9zunTX7B2jJ7Phuh2zxVUUUQGOr6bb9kzcu4fGqbYdPmcZbGnDDLbjlpYiycxbGjJMYSqSxL2XmEItYXx0pxc%2FJK%2BrLUtRmu267stGiHPBIAWNd8PzCSIzUmD%2BBDb9c79HGa6Opl9H5gcVF13%2F51Qo1D6sGwwteqL%2BiYMIYiSKhoyR%2FFPWDF9VgjBZueKpdxp2NWAyFwGYGuDJVTWMUOLr5IJ2%2FYSAVKM%2FWJSA7sf4vuwK1HaGVUyhvK27it3maZdyzg7v4GB%2FSfY3f3w3EjEV9uiwu9CO9ECgcmb1jRtAw4oPGyQY6pgHnw22a1uotUhVhxL1K8AR25dMyg8gfM4PC86ObHEmeZgXWWx%2FSgi9gvDqf8XD%2B37YNK4euaESJmpCyNFQHzuGme%2F%2BsKuXTk3feCB%2F36bKY74nUMJe8RdyA%2B2MaCxqsdQ39fIoePcDdWrpQH421KOU6KJ7m%2FBOJt7XnVnRfotxOOlucsUVt3Esq%2B5yVTQAptQAoI6gP%2FbDPEuwpUiLGEBtnZwLKcqHC&X-Amz-Signature=62cda1a86c1edea1dea56c0ef7cda4696f22c906e2f3277824b6436371d9f052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUERRQ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFAY22BVAQhVaKRseLGd5QvYmj%2FV5da4hVlRpRjSt90HAiAJMrQBc2AsP%2FhLOsvkcOof0l%2BuiWZhp1nzgKu9ieWHNCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMkWb%2B5LB3%2FNuWWHLNKtwD1ZjgzjwaTbRpLuwr340q0ircI3EtVV7URThztFAQehsOhQJRSOyzSD73I04%2BfV%2B%2B956A1gY1jZKsp2VW4d7Do6e4yVEWNTBvw6lxnTN7x6ej6WhX0sUeb6FbKP53w5UxhPhVtTtsUNfuUDK%2BH0TlSFRaeoXwgPZ59LOwTW7mP%2BYkFBNLyE0d9YGpJCz5SDLJUMu2o12z1N%2BOIccCW%2FElceg08NGkFTpWhhK7b8gaKQ020R0c78E6CA2YCWDQKIh9iAINsiQdznpDev8qdb4XpnyhYA4OwM3x9j97wEwX2O5Vuk8QWPv9a2qiGCLIz05hMTq39kFQfQNuJcPy%2B9zunTX7B2jJ7Phuh2zxVUUUQGOr6bb9kzcu4fGqbYdPmcZbGnDDLbjlpYiycxbGjJMYSqSxL2XmEItYXx0pxc%2FJK%2BrLUtRmu267stGiHPBIAWNd8PzCSIzUmD%2BBDb9c79HGa6Opl9H5gcVF13%2F51Qo1D6sGwwteqL%2BiYMIYiSKhoyR%2FFPWDF9VgjBZueKpdxp2NWAyFwGYGuDJVTWMUOLr5IJ2%2FYSAVKM%2FWJSA7sf4vuwK1HaGVUyhvK27it3maZdyzg7v4GB%2FSfY3f3w3EjEV9uiwu9CO9ECgcmb1jRtAw4oPGyQY6pgHnw22a1uotUhVhxL1K8AR25dMyg8gfM4PC86ObHEmeZgXWWx%2FSgi9gvDqf8XD%2B37YNK4euaESJmpCyNFQHzuGme%2F%2BsKuXTk3feCB%2F36bKY74nUMJe8RdyA%2B2MaCxqsdQ39fIoePcDdWrpQH421KOU6KJ7m%2FBOJt7XnVnRfotxOOlucsUVt3Esq%2B5yVTQAptQAoI6gP%2FbDPEuwpUiLGEBtnZwLKcqHC&X-Amz-Signature=2831e6be423c01fc08787f02ce8199478c5b37beaeee7eedb9208de6582bf998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

