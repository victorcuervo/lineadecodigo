---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XEXK5I2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWlGHfjfvyi%2BLeDEZ83NlglvItudsW%2FKcSS4wANTTi5AIhAJLwCqpULunDhGNbZ3sefDj8sGnQgJrfb2nBc7WDGTj0Kv8DCH8QABoMNjM3NDIzMTgzODA1IgziboEJZhKFwDIqCVcq3APFkjK3NhAk6C2BX3xnL3Bz1%2F5KTocTEww%2BnS7%2FwWRdUVu0CBu5bm5Yns8VPC7vgLYSoE5BtJU8Sp0%2BAO8tJx48Yejes0TZOG5254GXuwe7ICr98TT%2B%2Bq6GicGA1QNfw62vvf4dZlaKTEK4Sjv%2F%2FszQ4jvd8kxWCLm%2BcJhoaG2TL64w4zj5pjHtp5RSAat0LgVDaC35Fah1AGBRa0cX0WbcIQFEMPG1bhQ6Dw0bxTVpo7PmqxscWb20bO9fIgn8MmRdy%2FEtE3riABhNSkL2cOFDix296z%2BW96VImJnSt67EoVqPliaaYwkpToNHVbEi1T7imGdpgl4vgcnBIWIMx5Fx75bdcOrWsMi50h%2BB5uaSw6N6ULg5D33mLqTQI54kIV58nimdiJYEruI0jwPW1yUFfjr2gDQcEKSGUzcPgtG31hV%2F82Gphbaz0I%2FOA0w9YcNc3JnTnCRBZDHZt7SDjWP4d3laeTW8FN5GEJSgBjFbPzgqtNHBSgUQ8ImjblItfjJXXPKndSjL7LBG%2B1OEV6JgBvZnypghr7rYkO%2FCC6MnnwRR%2BEN8lhynhKem4aG0RUjQ1lx7a%2B2DOILCG6gSf8F7yE%2BkmM2ony0kTYBwwYQXsk6s6Hib0ak5BrR4VjDX1NLJBjqkAQn4GnIkNq%2FdLuOIDGkVsQbB6Y2JL8iXt%2FHKq3CWmSuoDvE%2BMDd5yKCtOia%2BMWCiQt%2ByA1IEXFCYGvAH4bOmMVghNRBS2F8VswVlty26Ps21xbXYGrTDeZTHTErXZpz34yFMUddovsj0O6y6MgPgaAaHeIOy%2FRekqpY3r50Sy5ukjMX3f3H%2BGO08GnDvax5YbO351%2B0ERYG91NU93HyjMRNEpL74&X-Amz-Signature=b17c8c5c2ea30f9127ea373938fba4393693023b89b0bb3130f153372e8ee886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XEXK5I2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWlGHfjfvyi%2BLeDEZ83NlglvItudsW%2FKcSS4wANTTi5AIhAJLwCqpULunDhGNbZ3sefDj8sGnQgJrfb2nBc7WDGTj0Kv8DCH8QABoMNjM3NDIzMTgzODA1IgziboEJZhKFwDIqCVcq3APFkjK3NhAk6C2BX3xnL3Bz1%2F5KTocTEww%2BnS7%2FwWRdUVu0CBu5bm5Yns8VPC7vgLYSoE5BtJU8Sp0%2BAO8tJx48Yejes0TZOG5254GXuwe7ICr98TT%2B%2Bq6GicGA1QNfw62vvf4dZlaKTEK4Sjv%2F%2FszQ4jvd8kxWCLm%2BcJhoaG2TL64w4zj5pjHtp5RSAat0LgVDaC35Fah1AGBRa0cX0WbcIQFEMPG1bhQ6Dw0bxTVpo7PmqxscWb20bO9fIgn8MmRdy%2FEtE3riABhNSkL2cOFDix296z%2BW96VImJnSt67EoVqPliaaYwkpToNHVbEi1T7imGdpgl4vgcnBIWIMx5Fx75bdcOrWsMi50h%2BB5uaSw6N6ULg5D33mLqTQI54kIV58nimdiJYEruI0jwPW1yUFfjr2gDQcEKSGUzcPgtG31hV%2F82Gphbaz0I%2FOA0w9YcNc3JnTnCRBZDHZt7SDjWP4d3laeTW8FN5GEJSgBjFbPzgqtNHBSgUQ8ImjblItfjJXXPKndSjL7LBG%2B1OEV6JgBvZnypghr7rYkO%2FCC6MnnwRR%2BEN8lhynhKem4aG0RUjQ1lx7a%2B2DOILCG6gSf8F7yE%2BkmM2ony0kTYBwwYQXsk6s6Hib0ak5BrR4VjDX1NLJBjqkAQn4GnIkNq%2FdLuOIDGkVsQbB6Y2JL8iXt%2FHKq3CWmSuoDvE%2BMDd5yKCtOia%2BMWCiQt%2ByA1IEXFCYGvAH4bOmMVghNRBS2F8VswVlty26Ps21xbXYGrTDeZTHTErXZpz34yFMUddovsj0O6y6MgPgaAaHeIOy%2FRekqpY3r50Sy5ukjMX3f3H%2BGO08GnDvax5YbO351%2B0ERYG91NU93HyjMRNEpL74&X-Amz-Signature=fde77f7e88cdbf0eb9a420a40cd95df99089f981d16f31cead985000539012d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

