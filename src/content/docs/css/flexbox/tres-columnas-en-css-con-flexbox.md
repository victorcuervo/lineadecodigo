---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN7JTXI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgztnVeAGovdE5i8qW8Fm1cJFDSyK5nR6Qtu43rmrOawIgOehxxpBLe70THpj39HUaXK3BhMdnsVOuO1f6Sw9vjOYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHhAX3YbVwfW0UYJfSrcA71OCi9viJAvo56liui5QJjuewyoCu%2BmgOKuGZNUh35KLyehQd6LcKAeEnHLAWraij6K2%2BgwghvIpuwIlSbTsrNnU4ztdoizexcXuWAlCZzT7eOjn1AOZvVIt%2BSGeYBXpCveo0ALk6VinXXVoz5v%2FUOuTwppdH%2BDq5ZU6uvvNbCaIvdOpPdvd9Ut1R9QEiympAaw%2BtSKpwXGRIgiLxwCbXcvfrsMOM1s93yb5rs%2FFZd6JRPnFFV%2FHL6fn08tIMgqj73orxG0T4NVKmU993JTfz3%2FmjJY%2FU1%2Fw%2FCTx0m3QtB4RvYKG%2BP16qn7Zw%2FWLjDx04T2JVpHFU6cfe%2FlRZYUJI%2BSYIzpH%2BmbXU5JHI7n%2FIhaj3MW%2Bh2iPJOOcvhrSH4Zhywe%2B1YlddKCt64aFXZB6cfbMMwsbg11%2B7bi4MlTdfE6EgnNGsfgN3vwq7vN3Cmg7p5JBwX%2FPwC6ikm9bM59ApbDeh0sfJVCEiJpypBV%2BOG4ciTz0%2BZob%2BFS5i29pM7nJXLGPZz5YAeRub%2FmjtWVu0b5EQgV2OqRWh9wGJlgZjwo9e%2FDkt1qL8bHo3quXmIB4UYMD3LVja5zbUFAuxPsbYC%2BXsVLbnstjY0eFqMjq9m%2B6whcaffoRV8bCcncMNWMyMkGOqUBTzfGjLN5hAhk%2FeaxMA9Z8bnsKTFF1F7gTv%2F50jB4TLdOYEPXhR%2F23mKj3uFEFh26LnOl3ewCgh91ayMrRoWMZWYmRMdvc6UhwqcvvDKLlhQloaow1HnmfoWnomZJQoXPfVM5VH%2BApVsCMHuRwUj%2FYDhihmZSd6s5bRHMK2Je%2BaCd84tdol9KvqUlzWLVI%2FaPCitgoDTEJghtFK0ayI%2FPcXyHBViw&X-Amz-Signature=d04ecb484f825c876b051af9d096d9b3cc43ce71f920d058678a0065dd54574e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN7JTXI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgztnVeAGovdE5i8qW8Fm1cJFDSyK5nR6Qtu43rmrOawIgOehxxpBLe70THpj39HUaXK3BhMdnsVOuO1f6Sw9vjOYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHhAX3YbVwfW0UYJfSrcA71OCi9viJAvo56liui5QJjuewyoCu%2BmgOKuGZNUh35KLyehQd6LcKAeEnHLAWraij6K2%2BgwghvIpuwIlSbTsrNnU4ztdoizexcXuWAlCZzT7eOjn1AOZvVIt%2BSGeYBXpCveo0ALk6VinXXVoz5v%2FUOuTwppdH%2BDq5ZU6uvvNbCaIvdOpPdvd9Ut1R9QEiympAaw%2BtSKpwXGRIgiLxwCbXcvfrsMOM1s93yb5rs%2FFZd6JRPnFFV%2FHL6fn08tIMgqj73orxG0T4NVKmU993JTfz3%2FmjJY%2FU1%2Fw%2FCTx0m3QtB4RvYKG%2BP16qn7Zw%2FWLjDx04T2JVpHFU6cfe%2FlRZYUJI%2BSYIzpH%2BmbXU5JHI7n%2FIhaj3MW%2Bh2iPJOOcvhrSH4Zhywe%2B1YlddKCt64aFXZB6cfbMMwsbg11%2B7bi4MlTdfE6EgnNGsfgN3vwq7vN3Cmg7p5JBwX%2FPwC6ikm9bM59ApbDeh0sfJVCEiJpypBV%2BOG4ciTz0%2BZob%2BFS5i29pM7nJXLGPZz5YAeRub%2FmjtWVu0b5EQgV2OqRWh9wGJlgZjwo9e%2FDkt1qL8bHo3quXmIB4UYMD3LVja5zbUFAuxPsbYC%2BXsVLbnstjY0eFqMjq9m%2B6whcaffoRV8bCcncMNWMyMkGOqUBTzfGjLN5hAhk%2FeaxMA9Z8bnsKTFF1F7gTv%2F50jB4TLdOYEPXhR%2F23mKj3uFEFh26LnOl3ewCgh91ayMrRoWMZWYmRMdvc6UhwqcvvDKLlhQloaow1HnmfoWnomZJQoXPfVM5VH%2BApVsCMHuRwUj%2FYDhihmZSd6s5bRHMK2Je%2BaCd84tdol9KvqUlzWLVI%2FaPCitgoDTEJghtFK0ayI%2FPcXyHBViw&X-Amz-Signature=866d1fd82f79819ebf1958c1ab695548bd5f31ec4a2ab7d38dbac198c7eb3244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

