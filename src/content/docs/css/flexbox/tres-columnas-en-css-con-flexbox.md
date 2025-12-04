---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LG5ILX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDWXAdHeAy%2FRvDX9e3fC1Cc7c%2BbwoEV1WBo3Wm2%2BQWbRQIhAIZOTyyXuYyeJY8lztHQIXLvXhpRmaasJCSeSUjF9f7HKv8DCEQQABoMNjM3NDIzMTgzODA1IgzLnokV1MWzVWydrBwq3AP80EFPjLs4XYTc3n1PqKfnu0lxOKn1lhbq67lifc%2BdhwJcJZXKiY95VpLu%2BuROzdVRmz99%2FZdiIRcYL%2Bru6kUK2jfkOoo3FKXoWmtddsOb8X1YWOwAPC%2FsddoVj83VqHQLkJZCcyCg0WFdylU1d%2BNg5IBnRvVhdPsNNfMz%2BGelcWY9OYaOjDD0yoA8%2B3swa5IjOH%2FhyvIYyniW8vHi4ZvJ1CvhOHdxPRXH5T3xp0LUH7dixweVFYYVaoSBb2DjA88QSB2uapznHxWLeeiHCTZuYVvIsmqMuuaVXL84X03iSfLhidHi%2B9dd66GXacY1Gh3j3VVjmelwgdjLXCPiM1iJ2jrmfjfhru1C7k7lofeWLojN56iDlFAztUZvl%2B9KCI7FNFdY3hTtuqFMknb7qAlvqvXIroIDd7MRRiMPNyaCiIx8WtRwjid806CsEAD2rqJaqY6h8aNLKAWi6pXRbZc98ISh93FATHUGp7VwEhYC5GJqnC51e%2FCEXm8XWLDB%2BS7%2FeFOshgON%2FYkB%2Fz5E1kI9W6hk%2FhlfghZoBiUJ9Sq9jK%2BeB2HhS6UD7ptzecd89V7vQY3MV4ulzAsRH1nCxII17wAfgsq7MIcMNgtQWBFlGaBsfTOUf2ujks1fhTDJycXJBjqkATtqwXnQzGEI6vvHaC41kZZd5vwKmaRd7z3eXiExYWiEqQi1NqD%2F2Kp1mpN2ATJRK0XdkMwSDLxTqEcEoz1COYF67L82%2FBnrVJ9Co0TotvlBUD8ui%2FCpp4W7xVd3%2BMrVDQHKWEh6groGHu1WSOmXlK%2Bd7VXruouTSty1a2pJUJBOIr%2FTFm7Md%2Fk08%2FhjPFEx1xi8ZqyBs%2BrO5bL4b2QOLz1R%2FVNE&X-Amz-Signature=c02b0fc57ad827521563e66af7aee6539b384f896077403e33852531f77a3b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LG5ILX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDWXAdHeAy%2FRvDX9e3fC1Cc7c%2BbwoEV1WBo3Wm2%2BQWbRQIhAIZOTyyXuYyeJY8lztHQIXLvXhpRmaasJCSeSUjF9f7HKv8DCEQQABoMNjM3NDIzMTgzODA1IgzLnokV1MWzVWydrBwq3AP80EFPjLs4XYTc3n1PqKfnu0lxOKn1lhbq67lifc%2BdhwJcJZXKiY95VpLu%2BuROzdVRmz99%2FZdiIRcYL%2Bru6kUK2jfkOoo3FKXoWmtddsOb8X1YWOwAPC%2FsddoVj83VqHQLkJZCcyCg0WFdylU1d%2BNg5IBnRvVhdPsNNfMz%2BGelcWY9OYaOjDD0yoA8%2B3swa5IjOH%2FhyvIYyniW8vHi4ZvJ1CvhOHdxPRXH5T3xp0LUH7dixweVFYYVaoSBb2DjA88QSB2uapznHxWLeeiHCTZuYVvIsmqMuuaVXL84X03iSfLhidHi%2B9dd66GXacY1Gh3j3VVjmelwgdjLXCPiM1iJ2jrmfjfhru1C7k7lofeWLojN56iDlFAztUZvl%2B9KCI7FNFdY3hTtuqFMknb7qAlvqvXIroIDd7MRRiMPNyaCiIx8WtRwjid806CsEAD2rqJaqY6h8aNLKAWi6pXRbZc98ISh93FATHUGp7VwEhYC5GJqnC51e%2FCEXm8XWLDB%2BS7%2FeFOshgON%2FYkB%2Fz5E1kI9W6hk%2FhlfghZoBiUJ9Sq9jK%2BeB2HhS6UD7ptzecd89V7vQY3MV4ulzAsRH1nCxII17wAfgsq7MIcMNgtQWBFlGaBsfTOUf2ujks1fhTDJycXJBjqkATtqwXnQzGEI6vvHaC41kZZd5vwKmaRd7z3eXiExYWiEqQi1NqD%2F2Kp1mpN2ATJRK0XdkMwSDLxTqEcEoz1COYF67L82%2FBnrVJ9Co0TotvlBUD8ui%2FCpp4W7xVd3%2BMrVDQHKWEh6groGHu1WSOmXlK%2Bd7VXruouTSty1a2pJUJBOIr%2FTFm7Md%2Fk08%2FhjPFEx1xi8ZqyBs%2BrO5bL4b2QOLz1R%2FVNE&X-Amz-Signature=eb59c036e06e12fee37687b13f4d4ed814a0dfd550a0806de186362c66254f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

