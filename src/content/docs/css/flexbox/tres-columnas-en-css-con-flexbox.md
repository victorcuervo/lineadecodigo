---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4J66KV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIh7CJmN7yZl4O9NiGBMaPBgAyHm47r7WgqhQvZpkJ3QIgXTOcE26KuRMR0IB49qsMUEBj4Ngnr7f9es4NDAMv96QqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWT3IBa7Mpngm41uyrcA%2Fa4Z1dUpwIViGkvBNEgWq8vm85ruNLnZenERfd8UM9LfTAgeWIxF07KGacqLahJoVaTQ7IgPJnBS1I%2B1SKJpbS1tm747PB0dSO7VraHMmPYdaTfc2kwNJDlEBuR8G0%2B09OKuW07aY%2BfLylUPv2fS3U2QCQwdkdH9Fu%2Bkmxc%2Fu8hyjPuJSmT7EZVBCO1aYRh6QmfGRnrnOfWOowvS1wHZBkTW5G8dGLBmE5iH35R4rkNpKIhx6IWohbgMPN2n5iCWNo3PubbHCtf6%2BSyCTjMqtKgo7TBTrFCiJXYqbTOu1F54F%2FJxvAtp7JKgVIlashaXRHkCWYXMXLQgZBVY9NzpBUL5D0ST6D3U4EGljk7Wy%2FCEaBZ%2F4czeLtLDf68%2FyROdbG1EeHk9aYewVCWGgLCyYJHXa0LNtbcKa5No7LFpnPxGROejm4hM2giRR4hDvt4qp%2BOU%2F6zy730x5wKrfdN1MJjlHdW8nlVtjRVpy31N6bTiOIECBmXYo1DJqcomNMLnoYGnkDwOLLAPw%2B3E4MNkKyZK3yBu1PtHdhaSa2jYMCn83idDaM7UCRT22ifHf%2BEmu64XS8AdZdHS8HliA8EbHFnTpVHy2hhkBRnRscLE6uOrjQ%2BPidXUJkGrEs8MKjt2ckGOqUBtbuQtEzvnMqJJ7fmVD6pZ1PYhCj%2Bljk8X%2BRXFtfsk8OYCIuSfhfc5GnXpZjWsXlpHGt6XGqaxiQNCRxZ6RVMWmMmrzQlNQu1wVIHmUnr1Inbyt5MJPaco2NA4v09C81TXF8kZ9Pb6fdTsOavTlXlmy%2Bk3fZvwYMNrK0d38fb45vCt%2FBx%2BMLvw%2FWg%2FO57fp%2FOGTAbG7GyNo5ERyUxHaTQbJC%2BZ%2Fa%2B&X-Amz-Signature=55763345f5401e00299454079664d02d2572ec64092d63157c77b7b3a55597ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4J66KV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIh7CJmN7yZl4O9NiGBMaPBgAyHm47r7WgqhQvZpkJ3QIgXTOcE26KuRMR0IB49qsMUEBj4Ngnr7f9es4NDAMv96QqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWT3IBa7Mpngm41uyrcA%2Fa4Z1dUpwIViGkvBNEgWq8vm85ruNLnZenERfd8UM9LfTAgeWIxF07KGacqLahJoVaTQ7IgPJnBS1I%2B1SKJpbS1tm747PB0dSO7VraHMmPYdaTfc2kwNJDlEBuR8G0%2B09OKuW07aY%2BfLylUPv2fS3U2QCQwdkdH9Fu%2Bkmxc%2Fu8hyjPuJSmT7EZVBCO1aYRh6QmfGRnrnOfWOowvS1wHZBkTW5G8dGLBmE5iH35R4rkNpKIhx6IWohbgMPN2n5iCWNo3PubbHCtf6%2BSyCTjMqtKgo7TBTrFCiJXYqbTOu1F54F%2FJxvAtp7JKgVIlashaXRHkCWYXMXLQgZBVY9NzpBUL5D0ST6D3U4EGljk7Wy%2FCEaBZ%2F4czeLtLDf68%2FyROdbG1EeHk9aYewVCWGgLCyYJHXa0LNtbcKa5No7LFpnPxGROejm4hM2giRR4hDvt4qp%2BOU%2F6zy730x5wKrfdN1MJjlHdW8nlVtjRVpy31N6bTiOIECBmXYo1DJqcomNMLnoYGnkDwOLLAPw%2B3E4MNkKyZK3yBu1PtHdhaSa2jYMCn83idDaM7UCRT22ifHf%2BEmu64XS8AdZdHS8HliA8EbHFnTpVHy2hhkBRnRscLE6uOrjQ%2BPidXUJkGrEs8MKjt2ckGOqUBtbuQtEzvnMqJJ7fmVD6pZ1PYhCj%2Bljk8X%2BRXFtfsk8OYCIuSfhfc5GnXpZjWsXlpHGt6XGqaxiQNCRxZ6RVMWmMmrzQlNQu1wVIHmUnr1Inbyt5MJPaco2NA4v09C81TXF8kZ9Pb6fdTsOavTlXlmy%2Bk3fZvwYMNrK0d38fb45vCt%2FBx%2BMLvw%2FWg%2FO57fp%2FOGTAbG7GyNo5ERyUxHaTQbJC%2BZ%2Fa%2B&X-Amz-Signature=dfd56296a21071d73ff097430b5f6470cf676fab1d7ea15ca44ee4568c3ec9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

