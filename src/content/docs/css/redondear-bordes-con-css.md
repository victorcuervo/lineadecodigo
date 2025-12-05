---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THT7W57M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaAwjaSEc7qQGiHkTBPZsee2Qq9YOCpRCcfUfy40v6mwIhAPD4ywH8HjLvS7rD3yKkv6RTmTiPWvVYtslkLF8O3973Kv8DCFsQABoMNjM3NDIzMTgzODA1IgyUXyxpUgrG8m6fa7Eq3ANRwbe6fndEhaOWJjjNgwEEeNXYCgHe1rLUBp0X3G8BuTLEUke%2Bue03pbSiuTJSzcISXOJ%2FAxihPkj17OwJ3%2B9Lh90AJ%2FjObwtn6HrK7YbVzoQO%2BTLoPIIZ6ydukiKFZt0pBoxde%2FZ%2FaOMWWNWf%2BucksFk1RL7EEtI3vgxa%2BCVXyqnRd%2FTshA7MCB5pk8aicEUogrssgY81u6okOFXgfqFjGjsutkMJb2B92Vgl3PGIGT6%2BZIly3xyKICbT5k9N2HmmjkVLl4ZMrIY%2Bks9hgbPg01RMkmrmULgibuhWJeaPUQGqfDGxu5RCk6QApb14k1DC5tOyRLgcx5fjOOwaM6hzkXPR7rci4HXdZQYkuPRXo6HydAPgASMzMs8TbMRayHn7MgqM%2BVe9VDQVsRupSmEvTf4QWGwO7mDPqZN5T4El%2F6AEgv6F8h00aViGsYHMVs2e2zVeFZSFHNp1MsBv1f3hDobKGbsbDm2z9sZ4o5NNik7mrfjPpnPm9KcPTRJ%2FC1jCaGtro78thpsDJ8cKEWpMnqxGjYtUp6DxcL6R7WY7oxc5EX7Q9EmgFUXwl7HuEKVAAfz8pdv8rss5hdqqoGuLq1HOopSN3brwWJuTuqoH9j8ZEYumKUTxuDGLYDCpzcrJBjqkAXtShKxNbhO4RRJysPXOZuhGy8kuj%2FxYdrEFO1yFBI3McQMUiKFbeBFHzJ6G5gWePP2j4aYdMvo4ZQGhZHpn6SSkDZl47Hh8IJ1IM6BTnFvfvmb%2BL0HWxU%2BJyDuv0Yplk2ihwL4yB72Urvh1NVFvREHsDrrjWxH06p6GuYhta53MbjEmv6hE5Ms8sYrQWksY0DlVPl9GT94CLnnDjfFzff4OLGmh&X-Amz-Signature=42a4551b323bfbc7de187ccae965676a440aff12eb33fd4f7d5bc21f025b8b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THT7W57M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaAwjaSEc7qQGiHkTBPZsee2Qq9YOCpRCcfUfy40v6mwIhAPD4ywH8HjLvS7rD3yKkv6RTmTiPWvVYtslkLF8O3973Kv8DCFsQABoMNjM3NDIzMTgzODA1IgyUXyxpUgrG8m6fa7Eq3ANRwbe6fndEhaOWJjjNgwEEeNXYCgHe1rLUBp0X3G8BuTLEUke%2Bue03pbSiuTJSzcISXOJ%2FAxihPkj17OwJ3%2B9Lh90AJ%2FjObwtn6HrK7YbVzoQO%2BTLoPIIZ6ydukiKFZt0pBoxde%2FZ%2FaOMWWNWf%2BucksFk1RL7EEtI3vgxa%2BCVXyqnRd%2FTshA7MCB5pk8aicEUogrssgY81u6okOFXgfqFjGjsutkMJb2B92Vgl3PGIGT6%2BZIly3xyKICbT5k9N2HmmjkVLl4ZMrIY%2Bks9hgbPg01RMkmrmULgibuhWJeaPUQGqfDGxu5RCk6QApb14k1DC5tOyRLgcx5fjOOwaM6hzkXPR7rci4HXdZQYkuPRXo6HydAPgASMzMs8TbMRayHn7MgqM%2BVe9VDQVsRupSmEvTf4QWGwO7mDPqZN5T4El%2F6AEgv6F8h00aViGsYHMVs2e2zVeFZSFHNp1MsBv1f3hDobKGbsbDm2z9sZ4o5NNik7mrfjPpnPm9KcPTRJ%2FC1jCaGtro78thpsDJ8cKEWpMnqxGjYtUp6DxcL6R7WY7oxc5EX7Q9EmgFUXwl7HuEKVAAfz8pdv8rss5hdqqoGuLq1HOopSN3brwWJuTuqoH9j8ZEYumKUTxuDGLYDCpzcrJBjqkAXtShKxNbhO4RRJysPXOZuhGy8kuj%2FxYdrEFO1yFBI3McQMUiKFbeBFHzJ6G5gWePP2j4aYdMvo4ZQGhZHpn6SSkDZl47Hh8IJ1IM6BTnFvfvmb%2BL0HWxU%2BJyDuv0Yplk2ihwL4yB72Urvh1NVFvREHsDrrjWxH06p6GuYhta53MbjEmv6hE5Ms8sYrQWksY0DlVPl9GT94CLnnDjfFzff4OLGmh&X-Amz-Signature=8af4e440d164b9016f61877f18ac9559d65a575bdd6e1190cb4b0ae71661be32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
