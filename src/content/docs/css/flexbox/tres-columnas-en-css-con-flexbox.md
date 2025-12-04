---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N24WGKG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFq9svST0gfgcUX0X5HxEOO7wIQ3oeDYX7DdXUuMV0aCAiBh714tWJsnDVADvljCLQu8R2vWNNWC7WxEIGEnEuyAWCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMIyIBszNNx%2F2XoKtFKtwDxG0WDyvyJ%2FSujC1ZC446tDPwuxItNs0NajhMhmVBORIUKe0%2BavMc3t%2Fe9IfoYai4JJ37idfwtgH04m9Uog%2BcCeT1Woaf%2FPp3VEFVzs4qysPDmhD0HRX%2BVQtsC963uYF6NKvU%2FerCF728LaxYqKtVqZtYFAzoJuJ2zurySd8p6NdSMICP0pIhwZfC1HgBkYcNKNOszPzpA0Hthtli3we8JDwfSftz18Eiv%2Fl3HtUFJEbHF%2FWw2iaaUaBMadN0Xus%2BLf2THQcZSUgw%2FjBwkHTL4qYUs05BsnoPzLhOVzwqQNYED794IXNh5jMyMXOJ5ZQan%2B9rVU%2B7T3Ug%2Btokg9DmA0ETpmrd45B9vetDQq3%2F%2F5q1z5CXWKLl9a4IWD%2Fw9dhIH8dKW2OoaG1dKTJf36%2FsV3yf9bvGf8RO6mqbZYYwElLsFNmYPHAcw7LL3as0%2FnMx8iGQklDPOPRjxqE8m9c8WDn3CYuVbWPnoiVgaFtQIWwbn%2B1w4G6qzZLPepAUYDS4Ad7rJJI%2FkI%2FmB1dPo59y9fTPSKd9EOJWv1CykfUQtMhg2IzX2zf8UjrCvYcw2hMwYx%2FfkwejdO7hb3FGBuKKjULSDGEXAADp1N2%2FirBolkf9sjTLxWikwLqZ61cwx%2BfEyQY6pgGDOQieAVPXTZ5wiO%2B7%2FjnZvHy4tXiOpJK4i2L4gNgUB%2Bap2vpWYLNN58%2BC3DdqQMCcFII7mBhN7JbtUlx26QXl7M5eAOp2fkP%2FoM5bjTqwILtkRTSXdh5lyEzOi9jKRQhV2pBaa0FuUPB7Ckmw034eLIiCuZGUp8iJ8j4M10%2BAoBUivXkUbAbZHjcnos4xkbkI9JZwZCMRp1GIl%2Fk9M3ITu3jUL0bd&X-Amz-Signature=df09ffd3690bf2c92fb2f84cbdee2c441eefd398e6e654a08baa41b28df79ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N24WGKG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFq9svST0gfgcUX0X5HxEOO7wIQ3oeDYX7DdXUuMV0aCAiBh714tWJsnDVADvljCLQu8R2vWNNWC7WxEIGEnEuyAWCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMIyIBszNNx%2F2XoKtFKtwDxG0WDyvyJ%2FSujC1ZC446tDPwuxItNs0NajhMhmVBORIUKe0%2BavMc3t%2Fe9IfoYai4JJ37idfwtgH04m9Uog%2BcCeT1Woaf%2FPp3VEFVzs4qysPDmhD0HRX%2BVQtsC963uYF6NKvU%2FerCF728LaxYqKtVqZtYFAzoJuJ2zurySd8p6NdSMICP0pIhwZfC1HgBkYcNKNOszPzpA0Hthtli3we8JDwfSftz18Eiv%2Fl3HtUFJEbHF%2FWw2iaaUaBMadN0Xus%2BLf2THQcZSUgw%2FjBwkHTL4qYUs05BsnoPzLhOVzwqQNYED794IXNh5jMyMXOJ5ZQan%2B9rVU%2B7T3Ug%2Btokg9DmA0ETpmrd45B9vetDQq3%2F%2F5q1z5CXWKLl9a4IWD%2Fw9dhIH8dKW2OoaG1dKTJf36%2FsV3yf9bvGf8RO6mqbZYYwElLsFNmYPHAcw7LL3as0%2FnMx8iGQklDPOPRjxqE8m9c8WDn3CYuVbWPnoiVgaFtQIWwbn%2B1w4G6qzZLPepAUYDS4Ad7rJJI%2FkI%2FmB1dPo59y9fTPSKd9EOJWv1CykfUQtMhg2IzX2zf8UjrCvYcw2hMwYx%2FfkwejdO7hb3FGBuKKjULSDGEXAADp1N2%2FirBolkf9sjTLxWikwLqZ61cwx%2BfEyQY6pgGDOQieAVPXTZ5wiO%2B7%2FjnZvHy4tXiOpJK4i2L4gNgUB%2Bap2vpWYLNN58%2BC3DdqQMCcFII7mBhN7JbtUlx26QXl7M5eAOp2fkP%2FoM5bjTqwILtkRTSXdh5lyEzOi9jKRQhV2pBaa0FuUPB7Ckmw034eLIiCuZGUp8iJ8j4M10%2BAoBUivXkUbAbZHjcnos4xkbkI9JZwZCMRp1GIl%2Fk9M3ITu3jUL0bd&X-Amz-Signature=4938bb87079964d74fd82cfa790d2ea0f44aa5cc7236ef2d075481faa069ed3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

