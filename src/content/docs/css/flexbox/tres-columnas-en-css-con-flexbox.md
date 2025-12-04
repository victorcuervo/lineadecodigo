---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBEEMO72%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH2s%2Fn5uZB%2FssAHFZBFFwMnSlHZus5Xyo9Dpqcv9izebAiEAvjZUgi%2BBJcDgNqX1d6LLrVQVZvPCGr3a9slZs26Xx4Iq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMYa51TE3O0SFiL8VSrcA7DjI%2FWHqNffnwqAjIzF0odG7O9aTNvN%2FrAuOo7mPCYrxttW3fNam3uU%2F4CETExYtEByMNu4W1NhCQiOuOGPRchJKlNdmC8gpsarGHIQTCNOFZuiijgphGUVrmIchG0kx6Og29dtIIaG1bNsmEgtoZhLvcEkIyKLdYecbWTRmz8GHgtQJ9K%2FOSJ44JO0dkt%2BK5LXK9YOskLH%2Fr1jCLUCxC30Zd%2BjBkQREhH2d%2BVnY2W7ohfCQp2gJ88uztLFvB7n2UUl6mEQ8D7faIKr7zY2xkQUClIsSFgP8zWLRyvcqSTM3PBFbgxI%2F2V1kKK3obJ%2FRcv87mv4zEkUXv9jqQ5jU1WDEqVZs444LDL9zi3KGHY2TUnnJ%2FQIgNxE%2FfB7UeITumNCjXtuIaPZQrhcHxvCODoKn0Z86HQRosGy6zHQ32o9Vc1nOpY12jOLt5vZJEE%2F3QIkcnGTC%2BuqBISmnZGnytBm5G1G%2FOr%2Fk%2FrdKVkfHolwtIfaofYrACh%2FugE0cWFpXVw9WY4D9JK%2BxddYMNuEjSG1H01QqdywAQJxfRGRuC7l%2B8P2q3mT6bL1pJORRt9Lbnq7z9PO4awxHurF3mwhuQA4AwYvwdiP793TBJ0e8ALrfqiYugJZZ2czXcj5MO%2FTw8kGOqUBdoa6sIEbH6VF4lpQVJ%2B7xDTcFKO%2B4iHjNvz%2FWX0%2B%2FL50jxYRhbW4GlA5kYs%2Bi%2FbzTyeH25fWP5PCv1Q%2BO7R1aBj0SP%2FJvsz9bbZeWIFzDQbh73R0hePyLh7GipUPgtSeWsmyn7YjA%2F43%2B4OoIq4YTGzgr3yoto8mIg%2FOSz505pP7QFYr74fDxdczRbYI%2Fs6fw1%2FakdYWrpX2RBdL8K1ebToYO2oE&X-Amz-Signature=8b4efbb48b955a0ee82eea1fac74bed9515e0133cba79d35bfcffdfe99eded7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBEEMO72%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH2s%2Fn5uZB%2FssAHFZBFFwMnSlHZus5Xyo9Dpqcv9izebAiEAvjZUgi%2BBJcDgNqX1d6LLrVQVZvPCGr3a9slZs26Xx4Iq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMYa51TE3O0SFiL8VSrcA7DjI%2FWHqNffnwqAjIzF0odG7O9aTNvN%2FrAuOo7mPCYrxttW3fNam3uU%2F4CETExYtEByMNu4W1NhCQiOuOGPRchJKlNdmC8gpsarGHIQTCNOFZuiijgphGUVrmIchG0kx6Og29dtIIaG1bNsmEgtoZhLvcEkIyKLdYecbWTRmz8GHgtQJ9K%2FOSJ44JO0dkt%2BK5LXK9YOskLH%2Fr1jCLUCxC30Zd%2BjBkQREhH2d%2BVnY2W7ohfCQp2gJ88uztLFvB7n2UUl6mEQ8D7faIKr7zY2xkQUClIsSFgP8zWLRyvcqSTM3PBFbgxI%2F2V1kKK3obJ%2FRcv87mv4zEkUXv9jqQ5jU1WDEqVZs444LDL9zi3KGHY2TUnnJ%2FQIgNxE%2FfB7UeITumNCjXtuIaPZQrhcHxvCODoKn0Z86HQRosGy6zHQ32o9Vc1nOpY12jOLt5vZJEE%2F3QIkcnGTC%2BuqBISmnZGnytBm5G1G%2FOr%2Fk%2FrdKVkfHolwtIfaofYrACh%2FugE0cWFpXVw9WY4D9JK%2BxddYMNuEjSG1H01QqdywAQJxfRGRuC7l%2B8P2q3mT6bL1pJORRt9Lbnq7z9PO4awxHurF3mwhuQA4AwYvwdiP793TBJ0e8ALrfqiYugJZZ2czXcj5MO%2FTw8kGOqUBdoa6sIEbH6VF4lpQVJ%2B7xDTcFKO%2B4iHjNvz%2FWX0%2B%2FL50jxYRhbW4GlA5kYs%2Bi%2FbzTyeH25fWP5PCv1Q%2BO7R1aBj0SP%2FJvsz9bbZeWIFzDQbh73R0hePyLh7GipUPgtSeWsmyn7YjA%2F43%2B4OoIq4YTGzgr3yoto8mIg%2FOSz505pP7QFYr74fDxdczRbYI%2Fs6fw1%2FakdYWrpX2RBdL8K1ebToYO2oE&X-Amz-Signature=9a395c74ff69a1b0010166997cf62e78b197ad4eed622dba710dd7d59637dc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

