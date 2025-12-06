---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO3RNA5V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0I%2BzBOE6qw2l49zvOH0eNFLl3qF5aaL4ADf15cxahLAIgRYmOigUsDdyrOYAjcuEacY0g8X8yI0xYeg%2Fa9wk%2FBxAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHV6i3%2BP1xYi0pSs3yrcA7UjcNRFwpNbLoLwm5IsSO0bhroFa9eAnMPxMQzJtJJPp3TQDyOcH3IyVIHmofltOtxArB1nak7Oacsy7pp8X%2BDKhEGLd%2F28Eg9b1imiUNF1Qgz2EMnHZ03Q898W0VbYxrhSazGSe74j1r9P1Fc%2BoaqEpZM8L2avJ1FsZ9JyEna6eLr7eDpJ0iBwVjkqzAcrk8yZvnqCx%2B3MrJj4QS%2FASUE%2B5lux862mn6HutnHwj2Ln%2BwQ1y0OSlALcg7CsnFLA5Xz%2Bj9SIC%2BpcDhBox1XefUg4dxYaR90LCw9AWUMSkd%2BTxBAkr8zZeKtgV0UjM6BjRl8qbegjXLvRyToxrGBkeZ17Mw17BZrwrG%2BXqlDeLD%2FApvHoShLVyw2slvsNNom916QAn4eSObmMiTgIHk4GCliY3vnnHGI1hpAQ8qNjDv4Tg7cl66Oa5%2BD36yorr5BsaPbQxWrpNeIp1YR0gXm07gLAXXynL0FBfYTIBCAMohjOp48HJZOwNQjP9Sa46zuEchfVDyfwwv397JE0fS3KjufmEg3bP7iXz8QyZXUFxYVLMKHPb051v7%2FuISXFtsw%2FFIOfeYrUJEQjWZDKvzjMdhTDoVloYZm6zR4H5iXxJ0Q4WptgtErGYPgTZy8EMO2m0MkGOqUBOyqKLx3%2Bh1TERTyw6l%2Blbhfpw9U0eBTjXjOMblT%2F514eeJ7E9ZkQoaHhhdIkRi6G%2B0okvbYuIsF7jiZkkwYEhZkLVEDAZRVnr5BqrvVZDWp32FShJaCt3R9QaJWzDun%2F0m17pitAcCluAzEhNkXB%2FfELdUjEMd6yEy1F6jhM%2BkS8ZQsGhkGmyJKRSKfg2VqblkCO%2FyzP0MimKKNRQpNp8rNAGvK1&X-Amz-Signature=556a66b8e5c1f5302d278bc9e72a7dccca555671a592266786472f03ff40b9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO3RNA5V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0I%2BzBOE6qw2l49zvOH0eNFLl3qF5aaL4ADf15cxahLAIgRYmOigUsDdyrOYAjcuEacY0g8X8yI0xYeg%2Fa9wk%2FBxAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHV6i3%2BP1xYi0pSs3yrcA7UjcNRFwpNbLoLwm5IsSO0bhroFa9eAnMPxMQzJtJJPp3TQDyOcH3IyVIHmofltOtxArB1nak7Oacsy7pp8X%2BDKhEGLd%2F28Eg9b1imiUNF1Qgz2EMnHZ03Q898W0VbYxrhSazGSe74j1r9P1Fc%2BoaqEpZM8L2avJ1FsZ9JyEna6eLr7eDpJ0iBwVjkqzAcrk8yZvnqCx%2B3MrJj4QS%2FASUE%2B5lux862mn6HutnHwj2Ln%2BwQ1y0OSlALcg7CsnFLA5Xz%2Bj9SIC%2BpcDhBox1XefUg4dxYaR90LCw9AWUMSkd%2BTxBAkr8zZeKtgV0UjM6BjRl8qbegjXLvRyToxrGBkeZ17Mw17BZrwrG%2BXqlDeLD%2FApvHoShLVyw2slvsNNom916QAn4eSObmMiTgIHk4GCliY3vnnHGI1hpAQ8qNjDv4Tg7cl66Oa5%2BD36yorr5BsaPbQxWrpNeIp1YR0gXm07gLAXXynL0FBfYTIBCAMohjOp48HJZOwNQjP9Sa46zuEchfVDyfwwv397JE0fS3KjufmEg3bP7iXz8QyZXUFxYVLMKHPb051v7%2FuISXFtsw%2FFIOfeYrUJEQjWZDKvzjMdhTDoVloYZm6zR4H5iXxJ0Q4WptgtErGYPgTZy8EMO2m0MkGOqUBOyqKLx3%2Bh1TERTyw6l%2Blbhfpw9U0eBTjXjOMblT%2F514eeJ7E9ZkQoaHhhdIkRi6G%2B0okvbYuIsF7jiZkkwYEhZkLVEDAZRVnr5BqrvVZDWp32FShJaCt3R9QaJWzDun%2F0m17pitAcCluAzEhNkXB%2FfELdUjEMd6yEy1F6jhM%2BkS8ZQsGhkGmyJKRSKfg2VqblkCO%2FyzP0MimKKNRQpNp8rNAGvK1&X-Amz-Signature=936e939db0401a1b60db9247dadeb87fbe9b55aac90a6d0958ca56e5492b9f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

