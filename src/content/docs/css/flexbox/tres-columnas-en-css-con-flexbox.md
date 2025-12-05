---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOGCZJOI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2ho5RHCvsLus6bIaCyWErY6O28xEytcHHW9oxPgcCuAiA6ObzWO7wVIS3b2yffnn%2BIyV8O81Ksc3pMcYiIA5Xclyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMarrsdbr4k5j4hYP4KtwDSN9%2BTrTHTiHiChNTYUs3xDJLENjTFqZAeiR8Dr2BwqjS8UzBAo9PNzTAIsNMY%2FkwocGdd5VNkKhBzK6Ly1R3IqhDSoo9oSyptS7rVAHSJGMuRUjbI%2Fo%2B%2BPdvgiF%2BXYwjdEeKf%2Bdv19BauQM3%2FXDawwN0Bmwgiam09%2F6WI7DJnfYtEA56fNsSAg1OELqzjiui51UoDxRD3CNsJCzDj1wel2ZJkHCCEORJFbFbTCrSHb0KLDK5jsXK8RW7F38rY57umo%2BEsWYtqdTTGR5HHAmlkqlJTTiDdmk2McsmuuunAkxaqVrBTLWfTQMccZZtsuc%2B9T6xNVhLCxxgoVeOhira2TR%2BO8kBaJztEeIhmkx8aFMX097btNqMNmNwZuZhrLL%2F0Dl8iNv3zgrA%2Bx1OX1mHEIbpDRIzZPzVzg3FCvvAt6BryED9d28O8%2B20a92YKSI8ngB0pZOnJo1DvR3jChoAOEPpMW7aC9qqLlCS8AmDv96IKa5NWnFG7FViQOSNS%2FKUoZYu0O9h6HZWfDao3sSMM0k%2Bs83L6rq5vF7I459ovuDpNSoW83RpfqY7zVDjzIFsbegjIz7hNTT1yKn4bb9uXuvIAzra3UngtvNJqKOIlwxx4175IbxoGsFH3Vgw2MrKyQY6pgHM2aTGYEwsb0bKASx5M6GpgJ%2F6v%2BXuteMM6LTV8ax0blfjNJmoUcGovXwJ%2FN1hm6NewAPkBo0UCFs6FAZMyKOcUkYFbjYvUu1w0JBA%2BU%2B4Rj8g5ohu%2BM1GUBTuW5HhDD1%2Fb4%2BNu9v94mmSn%2BrmXSlhiZn2DF2k17Tl%2F8xBrsgf9t4VdwBY8ns1QZ1VEmMRUMYoQB1hzGATyuAmzG558YqVpfc%2FF3iZ&X-Amz-Signature=1c62f7c4c64f487544bc6e90ed38687d4c7f56616db558883a74a2be02e4c8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOGCZJOI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2ho5RHCvsLus6bIaCyWErY6O28xEytcHHW9oxPgcCuAiA6ObzWO7wVIS3b2yffnn%2BIyV8O81Ksc3pMcYiIA5Xclyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMarrsdbr4k5j4hYP4KtwDSN9%2BTrTHTiHiChNTYUs3xDJLENjTFqZAeiR8Dr2BwqjS8UzBAo9PNzTAIsNMY%2FkwocGdd5VNkKhBzK6Ly1R3IqhDSoo9oSyptS7rVAHSJGMuRUjbI%2Fo%2B%2BPdvgiF%2BXYwjdEeKf%2Bdv19BauQM3%2FXDawwN0Bmwgiam09%2F6WI7DJnfYtEA56fNsSAg1OELqzjiui51UoDxRD3CNsJCzDj1wel2ZJkHCCEORJFbFbTCrSHb0KLDK5jsXK8RW7F38rY57umo%2BEsWYtqdTTGR5HHAmlkqlJTTiDdmk2McsmuuunAkxaqVrBTLWfTQMccZZtsuc%2B9T6xNVhLCxxgoVeOhira2TR%2BO8kBaJztEeIhmkx8aFMX097btNqMNmNwZuZhrLL%2F0Dl8iNv3zgrA%2Bx1OX1mHEIbpDRIzZPzVzg3FCvvAt6BryED9d28O8%2B20a92YKSI8ngB0pZOnJo1DvR3jChoAOEPpMW7aC9qqLlCS8AmDv96IKa5NWnFG7FViQOSNS%2FKUoZYu0O9h6HZWfDao3sSMM0k%2Bs83L6rq5vF7I459ovuDpNSoW83RpfqY7zVDjzIFsbegjIz7hNTT1yKn4bb9uXuvIAzra3UngtvNJqKOIlwxx4175IbxoGsFH3Vgw2MrKyQY6pgHM2aTGYEwsb0bKASx5M6GpgJ%2F6v%2BXuteMM6LTV8ax0blfjNJmoUcGovXwJ%2FN1hm6NewAPkBo0UCFs6FAZMyKOcUkYFbjYvUu1w0JBA%2BU%2B4Rj8g5ohu%2BM1GUBTuW5HhDD1%2Fb4%2BNu9v94mmSn%2BrmXSlhiZn2DF2k17Tl%2F8xBrsgf9t4VdwBY8ns1QZ1VEmMRUMYoQB1hzGATyuAmzG558YqVpfc%2FF3iZ&X-Amz-Signature=a755470c78071c3ac6dca664ec9ca89397f6e6ba7deae916f49ce1152767eb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

