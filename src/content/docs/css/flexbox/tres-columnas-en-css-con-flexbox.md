---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5FFCCVL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAUvJvQz7rg2BOKcnvlrl5VL2h5p%2FdDD6NW3G6fVw66oAiEAiriETOBHjeSyqBA83A1%2BoyUgOSom3lLeclKIQrlcoIEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLoTQ1DFpzMsPDlRiyrcA%2FFt564kv529xbIPG2CAcE0wLYqtiGAQLMBNwL%2FoWdjxRsrDSrsQGdn0vYlXFDdbaBVx2jKRWXe2umzcpw7xhcIWUQpCJvvAiHme%2BZFNl5J8EYpoGlYdvTMv4dUKfeYIQePfwTPdtUZNQxANDUAwoDB14sObV8sVhtMhuHr2JJPgm46SFNng%2Bmon%2BU1WufYcDu7q1aI52GiFErF7TOUyStGTKdB2l4aiqoaDvGtdn1LIMXZ1d2xmRvS4J%2FT%2B3lGmBzzqcrsXfw9fN58uyOzWOKksp0xqzEs3hDQwbzN1xXKUbm%2F%2F99bl3S6oOMpPdA2rcEKw9KRN%2Bg%2BKOaZNibeNsQq8UFnZ0dwzY0CG8WAoKIBoay%2FTuC7%2BbHN9GiDCWG0CWDs0FLWZYgiRaZupMbl%2FVifOmlVY6z%2BKmcklVObOqNy0yi4q%2Fv1cdtXIJpdMNxzHx1%2FUTySQnCK3kaYFNDylsuqHqZXoAbLs68kxZdvX6G99EugEO41Bhs8tdNNcHKA7iYjYF9FD%2FM6kOgE2VkF7%2FXngS6woItNaj1W5Xa%2B4qGsGvRXM5IqvOD9Q5Z42t0ypmNyZT%2BS4%2FRQ289uJ%2F9F9g18hvZFH%2BbCf6KpW8jYb91cH%2Bq%2BJW3cgff1LhnTSMIiVw8kGOqUB2smo3hk1Fopaqfyl3TeiJ9ZMDlDglWnlN4Hkk0kbHN96lhhHmWmy4MDbB8sfDO0CfxJ97Av%2B1KDCPYL6Of4O%2FOBL6iHy07g08%2F6fSoBxmkBajVnYAbyihSuNWWHIfxbNFi04vTE3h6Jd33TwIheDcnSVNDckbjo3SgqnN5czCTifHiduQESRrFMqP1PY1XdOU5pVTSX8O1JC6q%2FPnKYcoEFaOEX0&X-Amz-Signature=093579ebe92e184402f3a5f85c180ec448deeb211e2e2d4fbbcc029d90763962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5FFCCVL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAUvJvQz7rg2BOKcnvlrl5VL2h5p%2FdDD6NW3G6fVw66oAiEAiriETOBHjeSyqBA83A1%2BoyUgOSom3lLeclKIQrlcoIEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLoTQ1DFpzMsPDlRiyrcA%2FFt564kv529xbIPG2CAcE0wLYqtiGAQLMBNwL%2FoWdjxRsrDSrsQGdn0vYlXFDdbaBVx2jKRWXe2umzcpw7xhcIWUQpCJvvAiHme%2BZFNl5J8EYpoGlYdvTMv4dUKfeYIQePfwTPdtUZNQxANDUAwoDB14sObV8sVhtMhuHr2JJPgm46SFNng%2Bmon%2BU1WufYcDu7q1aI52GiFErF7TOUyStGTKdB2l4aiqoaDvGtdn1LIMXZ1d2xmRvS4J%2FT%2B3lGmBzzqcrsXfw9fN58uyOzWOKksp0xqzEs3hDQwbzN1xXKUbm%2F%2F99bl3S6oOMpPdA2rcEKw9KRN%2Bg%2BKOaZNibeNsQq8UFnZ0dwzY0CG8WAoKIBoay%2FTuC7%2BbHN9GiDCWG0CWDs0FLWZYgiRaZupMbl%2FVifOmlVY6z%2BKmcklVObOqNy0yi4q%2Fv1cdtXIJpdMNxzHx1%2FUTySQnCK3kaYFNDylsuqHqZXoAbLs68kxZdvX6G99EugEO41Bhs8tdNNcHKA7iYjYF9FD%2FM6kOgE2VkF7%2FXngS6woItNaj1W5Xa%2B4qGsGvRXM5IqvOD9Q5Z42t0ypmNyZT%2BS4%2FRQ289uJ%2F9F9g18hvZFH%2BbCf6KpW8jYb91cH%2Bq%2BJW3cgff1LhnTSMIiVw8kGOqUB2smo3hk1Fopaqfyl3TeiJ9ZMDlDglWnlN4Hkk0kbHN96lhhHmWmy4MDbB8sfDO0CfxJ97Av%2B1KDCPYL6Of4O%2FOBL6iHy07g08%2F6fSoBxmkBajVnYAbyihSuNWWHIfxbNFi04vTE3h6Jd33TwIheDcnSVNDckbjo3SgqnN5czCTifHiduQESRrFMqP1PY1XdOU5pVTSX8O1JC6q%2FPnKYcoEFaOEX0&X-Amz-Signature=92d1c5a7f5167fc91e793fe616d6b99a72a2f609d18281c492ffc847a443fff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

